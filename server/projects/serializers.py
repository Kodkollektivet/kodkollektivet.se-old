
from rest_framework import serializers

from .models import Project, Contributor, Language, Role, ProCon, ProLan, ProRol


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('slug', 'name', 'about', 'gh_name', 'gh_id', 'gh_url')
        lookup_fields = 'slug'


class ContributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributor
        fields = ('slug', 'name', 'email', 'website', 'about', 'gh_login', 'gh_url', 'gh_html')
        lookup_fields = 'slug'


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('slug', 'role')
        lookup_fields = 'slug'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('slug', 'name')
        lookup_fields = 'slug'


class ProLanSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    language = serializers.SlugRelatedField(read_only=True, slug_field='slug')

    class Meta:
        model = ProLan
        fields = ('project', 'language')


class ProConSerializer(serializers.ModelSerializer):

    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    contributor = serializers.SlugRelatedField(read_only=True, slug_field='slug')

    class Meta:
        model = ProCon
        fields = ('project', 'contributor')


class ProRolSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    contributor = serializers.SlugRelatedField(read_only=True, slug_field='slug')
    role = serializers.SlugRelatedField(read_only=True, slug_field='slug')

    class Meta:
        model = ProRol
        fields = ('project', 'contributor', 'role')

