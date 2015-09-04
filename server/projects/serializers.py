
from rest_framework.serializers import ModelSerializer

from .models import Project, Contributor, ProCon


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'slug', 'about', 'gh_name', 'gh_id', 'gh_url')

class ContributorSerializer(ModelSerializer):
    class Meta:
        model = Contributor
        fields = ('name', 'email', 'website', 'about', 'gh_login', 'gh_url')

class ProConSerializer(ModelSerializer):
    class Meta:
        model = ProCon
        fields = ('project', 'contributor')



