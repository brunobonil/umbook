# Generated by Django 4.0.4 on 2022-07-25 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('umbook', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='foto',
            name='imagen',
            field=models.ImageField(default=None, upload_to=''),
        ),
    ]