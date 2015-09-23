
from rest_framework import serializers

from .models import Project, Contributor, Language, ProCon, ProLan


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'slug', 'about', 'gh_name', 'gh_id', 'gh_url')
        lookup_fields = 'slug'

class ContributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributor
        fields = ('name', 'email', 'website', 'about', 'gh_login', 'gh_url', 'gh_html')
        lookup_fields = 'gh_login'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('name',)
        lookup_fields = 'name'

class ProLanSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    language = serializers.SlugRelatedField(read_only=True, slug_field='name')

    class Meta:
        model = ProLan
        fields = ('project', 'language')

class ProConSerializer(serializers.ModelSerializer):

    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    contributor = serializers.SlugRelatedField(read_only=True, slug_field='gh_login')

    class Meta:
        model = ProCon
        fields = ('project', 'contributor')



