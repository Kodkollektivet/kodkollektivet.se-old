from django.contrib import admin

from .models import Project, Contributor, Language, ProCon, ProLan


admin.site.register(Project)
admin.site.register(Language)
admin.site.register(Contributor)

admin.site.register(ProCon)
admin.site.register(ProLan)