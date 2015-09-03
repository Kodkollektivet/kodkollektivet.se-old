
from django.conf.urls import url, include

from .views import GithubHook

urlpatterns = [
    url(r'^webhook/$', GithubHook.as_view()),
]
