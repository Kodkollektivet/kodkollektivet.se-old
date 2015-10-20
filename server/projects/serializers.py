
from rest_framework import serializers

from . import models


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = ('slug', 'name', 'gh_name', 'gh_id', 'gh_url', 'gh_readme')
        lookup_fields = 'slug'


class ContributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contributor
        fields = ('slug', 'name', 'email', 'website', 'about', 'gh_login', 'gh_url', 'gh_html', 'gh_avatar')
        lookup_fields = 'slug'


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Role
        fields = ('slug', 'role')
        lookup_fields = 'slug'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Language
        fields = ('slug', 'name')
        lookup_fields = 'slug'

        
class FrameworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Framework
        fields = ('slug', 'name')
        lookup_fields = 'slug'
        

class ProLanSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    language = serializers.SlugRelatedField(read_only=True, slug_field='slug')

    class Meta:
        model = models.ProLan
        fields = ('project', 'language')

        
class ProFraSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    framework = serializers.SlugRelatedField(read_only=True, slug_field='slug')

    class Meta:
        model = models.ProFra
        fields = ('project', 'framework')


class ProConSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    contributor = serializers.SlugRelatedField(read_only=True, slug_field='slug')

    class Meta:
        model = models.ProCon
        fields = ('project', 'contributor')


class ProRolSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    contributor = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    role = serializers.SlugRelatedField(read_only=True, slug_field='slug')

    class Meta:
        model = models.ProRol
        fields = ('project', 'contributor', 'role')

