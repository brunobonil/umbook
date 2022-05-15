from email.headerregistry import ContentDispositionHeader
from tkinter import CASCADE
from click import password_option
from django.db import models

# Create your models here.
class Usuario(models.Model):
    username = models.CharField(max_length=15)
    password = models.CharField(max_length=30)
    isAdmin = models.BooleanField()

class Notificacion(models.Model):
    contenido = models.CharField(max_length=200)
    link = models.CharField(max_length=30)

class Comentario(models.Model):
    username = models.ForeignKey(Usuario, on_delete=CASCADE)
    #password = models.CharField(max_length=30) 

    def delete():
        pass

class Grupo(models.Model):
    nombre = models.CharField(max_length=15)
    descripcion = models.CharField(max_length=50)

class Album(models.Model):
    nombre = models.CharField(max_length=15)

    def add():
        pass

    def delete():
        pass

    def modify():
        pass

class Foto(models.Model):
    caption = models.CharField(max_length=50)
    fecha = models.DateTimeField()

    def delete():
        pass

