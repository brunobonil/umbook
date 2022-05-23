# Generated by Django 4.0.4 on 2022-05-23 00:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('umbook', '0002_alter_usuario_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='notificacion',
            name='emisor',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='emisor', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='notificacion',
            name='propietario',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='propietario', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='usuario',
            name='amigos',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
