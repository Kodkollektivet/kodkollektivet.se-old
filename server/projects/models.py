from django.db import models
from django.utils.text import slugify
from core.models import TimeStampedModel
from tinymce.models import HTMLField


class Project(models.Model):

    name = models.CharField(max_length=254, unique=True)
    slug = models.SlugField(blank=True)
    about = HTMLField(blank=True)

    # Github specific
    gh_name = models.CharField(max_length=254, blank=True)
    gh_id = models.IntegerField(blank=True, null=True)
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
        return self.slug


class Role(models.Model):
    role = models.CharField(max_length=254, blank=True)
    slug = models.CharField(max_length=254, blank=True)

    def save(self, *args, **kwargs):
        """
        Set slug
        """
        self.slug = slugify(self.role)
        super(Role, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.slug


class Contributor(models.Model):

    name = models.CharField(max_length=254, blank=True)
    slug = models.CharField(max_length=254, blank=True)
    email = models.EmailField(max_length=254, blank=True)
    website = models.CharField(max_length=254, blank=True)
    about = HTMLField(blank=True)

    # Github specific
    gh_login = models.CharField(max_length=254)
    gh_url = models.CharField(max_length=254)
    gh_id = models.IntegerField()
    gh_html = models.CharField(max_length=254, blank=True)

    def save(self, *args, **kwargs):
        """
        Set name and slug
        """
        if not self.name:
            self.name = self.gh_login
            self.slug = slugify(self.gh_login)

        super(Contributor, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.slug


class Language(models.Model):
    name = models.CharField(max_length=254)
    slug = models.CharField(max_length=254, blank=True)

    def save(self, *args, **kwargs):
        """
        Set slug
        """
        self.slug = self.name
        super(Language, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.slug


class ProCon(models.Model):
    project = models.ForeignKey(Project)
    contributor = models.ForeignKey(Contributor)

    def __unicode__(self):
        return self.contributor.slug + ' <-> ' + self.project.slug


class ProLan(models.Model):
    project = models.ForeignKey(Project)
    language = models.ForeignKey(Language)

    def __unicode__(self):
        return self.language.slug + ' <-> ' + self.project.slug


class ProRol(models.Model):
    project = models.ForeignKey(Project)
    contributor = models.ForeignKey(Contributor)
    role = models.ForeignKey(Role)



