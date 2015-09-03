from django.db import models

from tinymce.models import HTMLField

from core.models import TimeStampedModel

class Info(TimeStampedModel):
    text = HTMLField()