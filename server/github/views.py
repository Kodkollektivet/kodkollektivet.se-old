import requests
from base64 import b64decode

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from projects.models import Project, Contributor, ProCon, ProLan, Language
from projects.forms import ProjectForm

# If develop, use settings.settings, else
# use settings.production.
#from settings.production import OAUTH_TOKEN
from settings.settings import OAUTH_TOKEN


def getrepos():
    """
    This function collects all the repos from
    GitHub and store them in the database
    """
    projects = requests.get('https://api.github.com/orgs/kodkollektivet/repos' + OAUTH_TOKEN).json()

    for project in projects:
        print(project['name'])
        b64_readme = requests.get('https://api.github.com/repos/kodkollektivet/' + project['name'] + '/readme').json()
        print(b64_readme)
        ascii_readme = b64decode(b64_readme['content'])
        print(ascii_readme)
        project['readme'] = ascii_readme
        
    for project in projects:

        form = ProjectForm({
            'gh_name': project['name'],
            'gh_id': project['id'],
            'gh_url': project['html_url'],
            'gh_readme': project['readme']
        })

        if form.is_valid():
            pro, created = Project.objects.get_or_create(**form.data)

            languages = requests.get('https://api.github.com/repos/kodkollektivet/'+project['name']+'/languages' + OAUTH_TOKEN).json()

            for key, value in languages.iteritems():
                lan, created = Language.objects.get_or_create(name=key)
                obj, created = ProLan.objects.get_or_create(project=pro, language=lan)


def getcontribs():
    """
    This function get all the project objects from the database.
    Ask the GitHub API for the contributors in the project.
    Save them to the database and create a relation.
    Project <-> Contributor
    """

    projects = Project.objects.all()  # Get all projects

    for project in projects:  # iterate over them

        if (len(project.gh_name) > 2) or (project.gh_id is not None):  # go in here if gh_name or gh_id

            request = requests.get('https://api.github.com/repos/kodkollektivet/'+project.gh_name+'/contributors' + OAUTH_TOKEN).json()

            for data in request:
                Contributor.objects.get_or_create(
                    gh_login=data['login'],
                    gh_url=data['url'],
                    gh_id=data['id'],
                    gh_html=data['html_url']
                )


def getprocon():

    projects = Project.objects.all()

    for project in projects:

        if (len(project.gh_name) > 2) or (project.gh_id is not None):  # If it is a github project
            request = requests.get('https://api.github.com/repos/kodkollektivet/'+project.gh_name+'/contributors' + OAUTH_TOKEN).json()

            for data in request:
                contributor = Contributor.objects.get(gh_id=data['id'])
                ProCon.objects.get_or_create(contributor=contributor, project=project)


class GithubHook(APIView):

    permission_classes = (AllowAny,)

    def post(self, *args):
        getrepos()
        getcontribs()
        getprocon()
        return Response(status=status.HTTP_200_OK)
