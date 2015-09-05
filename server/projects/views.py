
from rest_framework import viewsets

from .models import Project, Contributor, ProCon
from .serializers import ProjectSerializer, ContributorSerializer, ProConSerializer

class ProjectViewset(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'slug'

class ContributorViewset(viewsets.ModelViewSet):
    queryset = Contributor.objects.all()
    serializer_class = ContributorSerializer
    lookup_field = 'gh_login'

class ProConViewset(viewsets.ModelViewSet):
    queryset = ProCon.objects.all()
    serializer_class = ProConSerializer
