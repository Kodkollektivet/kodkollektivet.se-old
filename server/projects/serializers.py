
from rest_framework import serializers

from .models import Project, Contributor, ProCon


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'slug', 'about', 'gh_name', 'gh_id', 'gh_url')
        lookup_fields = 'slug'

class ContributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributor
        fields = ('name', 'email', 'website', 'about', 'gh_login', 'gh_url')
        lookup_fields = 'gh_login'

class ProConSerializer(serializers.ModelSerializer):

    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    contributor = serializers.SlugRelatedField(read_only=True, slug_field='gh_login')

    class Meta:
        model = ProCon
        fields = ('project', 'contributor')



