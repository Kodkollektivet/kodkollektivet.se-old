from django.contrib import admin

from . import models


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created',)
    exclude = ('slug',)    

    
admin.site.register(models.News, NewsAdmin)

