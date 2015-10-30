from django.db import models
from django.utils.text import slugify

from core.models import TimeStampedModel

class News(TimeStampedModel):
    slug = models.SlugField(blank=True)
    title = models.CharField(max_length=254)
    body = models.TextField()

    def save(self, *args, **kwargs):
        """
        Set slug
        """
        self.slug = slugify(self.title)
        super(News, self).save(*args, **kwargs)
    
