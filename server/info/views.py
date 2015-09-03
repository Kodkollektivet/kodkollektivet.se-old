
from rest_framework import viewsets

from .models import Info
from .serializers import InfoSerializer

class InfoViewsets(viewsets.ModelViewSet):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer

