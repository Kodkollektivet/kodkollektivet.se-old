from django.conf.urls import url, include

from .views import ContactApiView

urlpatterns = [
    url(r'^', ContactApiView.as_view()),
]
