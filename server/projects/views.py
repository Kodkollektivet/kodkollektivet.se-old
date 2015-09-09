
from rest_framework import viewsets

from .models import Project, Contributor, Language, ProCon, ProLan
from .serializers import ProjectSerializer, ContributorSerializer, ProConSerializer, LanguageSerializer, ProLanSerializer

class ProjectViewset(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'slug'

class ContributorViewset(viewsets.ModelViewSet):
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    lookup_field = 'gh_login'

class LanguageViewset(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    lookup_field = 'name'

class ProConViewset(viewsets.ModelViewSet):
    queryset = ProCon.objects.all()
    serializer_class = ProConSerializer

class ProLanViewset(viewsets.ModelViewSet):
    queryset = ProLan.objects.all()
    serializer_class = ProLanSerializer