# Generated by Django 5.0.6 on 2024-07-18 20:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_profile_bio'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Profile',
        ),
    ]