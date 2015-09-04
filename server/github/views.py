import requests
import json
import pprint

from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.db import IntegrityError

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from projects.models import Project, Contributor, ProCon
from projects.forms import ProjectForm, ContributorForm


def get_repos():
    """
    This function collects all the repos from
    GitHub and store them in the database
    """
    data = requests.get('https://api.github.com/orgs/videumcodeup/repos').json()

    for obj in data:

        form = ProjectForm({
            'gh_name': obj['name'],
            'gh_id': obj['id'],
            'gh_url': obj['html_url']
        })

        if form.is_valid():
            Project.objects.update_or_create(**form.data)


def get_contribs():

    for project in Project.objects.all():
        data = requests.get('https://api.github.com/repos/videumcodeup/'+project.gh_name+'/contributors').json()
        #pp = pprint.PrettyPrinter(indent=4)
        #pp.pprint(data)
        form = ContributorForm({
            'gh_login': data[0]['login'],
            'gh_url': data[0]['html_url']
        })

        if form.is_valid():
            contributor, created = Contributor.objects.update_or_create(**form.data)

        try:
            ProCon(project=project,contributor=contributor).save()
        except IntegrityError as e:
            print(e)


class GithubHook(APIView):

    permission_classes = (AllowAny,)

    def post(self, request):

        #pp = pprint.PrettyPrinter(indent=4)
        #pp.pprint(request.data)

        get_repos()
        get_contribs()

        return Response(status=status.HTTP_200_OK)





