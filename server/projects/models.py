from django.db import models
from django.utils.text import slugify
from core.models import TimeStampedModel
from tinymce.models import HTMLField

class Project(TimeStampedModel):

    name = models.CharField(max_length=254, unique=True)
    slug = models.SlugField(blank=True)
    about = models.TextField(blank=True)

    # Github specific
    gh_name = models.CharField(max_length=254)
    gh_id = models.IntegerField()
    gh_url = models.CharField(max_length=254, blank=True)

    def save(self, *args, **kwargs):

        """
        Set slug
        """
        if not self.name:
            self.name = self.gh_name

        if not self.slug:
            self.slug = slugify(self.name)

        super(Project, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.gh_name


class Contributor(TimeStampedModel):

    name = models.CharField(max_length=254, blank=True)
    email = models.EmailField(max_length=254, blank=True)
    website = models.CharField(max_length=254, blank=True)
    about = HTMLField(blank=True)

    # Github specific
    gh_login = models.CharField(max_length=254)
    gh_url = models.CharField(max_length=254)

    def save(self, *args, **kwargs):

        if not self.name:
            self.name = self.gh_login

        super(Contributor, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.name


class ProCon(TimeStampedModel):
    project = models.ForeignKey(Project, db_column='project_id', primary_key=True)
    contributor = models.ForeignKey(Contributor, db_column='contributor_id')

    def __unicode__(self):
        return self.contributor.gh_login + ' < - > ' + self.project.gh_name

    class Meta:
        unique_together = ("project", "contributor")


