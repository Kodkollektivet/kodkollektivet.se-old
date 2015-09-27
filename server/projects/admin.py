from django.contrib import admin

import models


class ProRolAdmin(admin.ModelAdmin):
    list_display = ('contributor', 'project', 'role',)


class ProConAdmin(admin.ModelAdmin):
    list_display = ('contributor', 'project',)


admin.site.register(models.Project)
admin.site.register(models.Language)
admin.site.register(models.Contributor)
admin.site.register(models.Role)

admin.site.register(models.ProCon, ProConAdmin)
admin.site.register(models.ProLan)
admin.site.register(models.ProRol, ProRolAdmin)