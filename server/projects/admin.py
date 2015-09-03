from django.contrib import admin

from .models import Project, Contributor, ProCon

admin.site.register(ProCon)
admin.site.register(Project)
admin.site.register(Contributor)

