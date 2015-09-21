import requests

from django.core.exceptions import ObjectDoesNotExist

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from projects.models import Project, Contributor, ProCon, ProLan, Language
from projects.forms import ProjectForm, ContributorForm


def get_repos():
    """
    This function collects all the repos from
    GitHub and store them in the database
    """
    projects = requests.get('https://api.github.com/orgs/kodkollektivet/repos').json()

    for project in projects:

        form = ProjectForm({
            'gh_name': project['name'],
            'gh_id': project['id'],
            'gh_url': project['html_url']
        })

        if form.is_valid():
            pro, created = Project.objects.get_or_create(**form.data)

            languages = requests.get('https://api.github.com/repos/kodkollektivet/'+project['name']+'/languages').json()

            for key, value in languages.iteritems():
                print(key)
                lan, created = Language.objects.get_or_create(name=key)
                obj, created = ProLan.objects.get_or_create(project=pro, language=lan)


def get_contribs():
    """
    This function get all the project objects from the database.
    Ask the GitHub API for the contributors in the project.
    Save them to the database and create a relation.
    Project <-> Contributor
    """

    projects = Project.objects.all()

    for project in projects:

        request = requests.get('https://api.github.com/repos/kodkollektivet/'+project.gh_name+'/contributors').json()

        for data in request:
            try:
                Contributor.objects.get(gh_id=data['id'])

            except ObjectDoesNotExist as e:
                Contributor(gh_login=data['login'], gh_url=data['url'], gh_id=data['id']).save()


def get_procon():

    projects = Project.objects.all()

    for project in projects:
        request = requests.get('https://api.github.com/repos/kodkollektivet/'+project.gh_name+'/contributors').json()

        for data in request:

            contributor = Contributor.objects.get(gh_id=data['id'])
            ProCon.objects.get_or_create(contributor=contributor, project=project)



class GithubHook(APIView):

    permission_classes = (AllowAny,)

    def post(self, request):

        get_repos()
        get_contribs()
        get_procon()

        return Response(status=status.HTTP_200_OK)





