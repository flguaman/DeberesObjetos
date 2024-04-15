from django.urls import path, include
from miapp import views

urlpatterns = [
    path('', include('miapp.urls')),
]
