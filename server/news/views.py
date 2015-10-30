from rest_framework import viewsets, pagination

from . import models
from . import serializers

    
class NewsViewset(viewsets.ModelViewSet):
    queryset = models.News.objects.all()
    serializer_class = serializers.NewsSerializers
    lookup_field = 'slug'


