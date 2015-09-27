
from rest_framework import viewsets

from . import models
from . import serializers


class ProjectViewset(viewsets.ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer
    lookup_field = 'slug'


class ContributorViewset(viewsets.ModelViewSet):
    queryset = models.Contributor.objects.all()
    serializer_class = serializers.ContributorSerializer
    lookup_field = 'slug'


class RoleViewset(viewsets.ModelViewSet):
    queryset = models.Role.objects.all()
    serializer_class = serializers.RoleSerializer
    lookup_field = 'slug'


class LanguageViewset(viewsets.ModelViewSet):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanguageSerializer
    lookup_field = 'slug'


class ProConViewset(viewsets.ModelViewSet):
    queryset = models.ProCon.objects.all()
    serializer_class = serializers.ProConSerializer


class ProLanViewset(viewsets.ModelViewSet):
    queryset = models.ProLan.objects.all()
    serializer_class = serializers.ProLanSerializer


class ProRolViewset(viewsets.ModelViewSet):
    queryset = models.ProRol.objects.all()
    serializer_class = serializers.ProRolSerializer