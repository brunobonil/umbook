# Generated by Django 3.2.7 on 2022-05-29 23:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('umbook', '0003_notificacion_emisor_notificacion_propietario_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notificacion',
            name='contenido',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='notificacion',
            name='link',
            field=models.CharField(default='', max_length=30),
        ),
    ]
