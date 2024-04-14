
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("faisana_backend/", include("faisana_backend.urls")),
    path("admin/", admin.site.urls),
]

