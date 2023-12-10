from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "city_app"

urlpatterns = [
        path('newcity/',
                views.CityAPISerializer.as_view(),
                name='NewCity'),
        path('showcity/',
             views.CityListAPIView.as_view(),
             name='citys'),
        path('deletecity/<pk>',
             views.CityDeleteAPIView.as_view(),
             name='citydel')
]