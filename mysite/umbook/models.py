from django.db import models
from django.db.models import CASCADE
from django.contrib.auth.models import AbstractUser


class Usuario(AbstractUser):
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    amigos = models.ManyToManyField("Usuario", blank=True)

class Notificacion(models.Model):
    propietario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="propietario", default=None)
    emisor = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="emisor", default=None)
    contenido = models.CharField(max_length=200, default="")
    link = models.CharField(max_length=30, default="")

class Comentario(models.Model):
    username = models.ForeignKey(Usuario, on_delete=CASCADE)
    foto = models.ForeignKey('Foto', on_delete=CASCADE)

class Grupo(models.Model):
    nombre = models.CharField(max_length=15)
    descripcion = models.CharField(max_length=50)
    propietario = models.ForeignKey(Usuario, on_delete=CASCADE)
    miembros = models.ManyToManyField('Usuario', blank=True, related_name='miembros')

class Album(models.Model):
    nombre = models.CharField(max_length=15)
    usuario = models.ForeignKey(Usuario, on_delete=CASCADE)
    grupo = models.ForeignKey(Grupo, on_delete=CASCADE)

    def __str__(self):
        return self.nombre

class Foto(models.Model):
    caption = models.CharField(max_length=50)
    fecha = models.DateTimeField()
    album = models.ForeignKey(Album, on_delete=CASCADE)
