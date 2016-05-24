from rest_framework import serializers

from . import models


class NewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.News
        fields = ('slug', 'title', 'created', 'body')
