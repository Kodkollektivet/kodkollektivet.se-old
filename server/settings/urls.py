"""settings URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from news import views
from projects import views as projectView

router = DefaultRouter()
router.register(r'project', projectView.ProjectViewset)
router.register(r'contributor', projectView.ContributorViewset)
router.register(r'language', projectView.LanguageViewset)
router.register(r'framework', projectView.FrameworkViewset)
router.register(r'role', projectView.RoleViewset)
router.register(r'profra', projectView.ProFraViewset)
router.register(r'procon', projectView.ProConViewset)
router.register(r'prolan', projectView.ProLanViewset)
router.register(r'prorol', projectView.ProRolViewset)
router.register(r'news', views.NewsViewset)


urlpatterns = [
    
    url(r'^admin/', include(admin.site.urls)),

    url(r'^', include(router.urls)),

    url(r'^contact/', include('contact.urls')),

    url(r'^github/', include('github.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
