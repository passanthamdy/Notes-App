from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='getRoutes'),
    path('notes/', views.listNotes, name='listNotes'),
    path('notes/create/', views.createNote, name='createNote'),
    path('notes/<int:id>/', views.getNote, name='getNote'),
    path('notes/<int:id>/update', views.updateNote, name='updateNote'),
    path('notes/<int:id>/delete', views.deleteNote, name='deleteNote'),

]
