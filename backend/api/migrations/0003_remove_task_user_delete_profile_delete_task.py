# Generated by Django 5.0.6 on 2024-06-19 11:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_profile_fullname_alter_profile_bio_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='user',
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
        migrations.DeleteModel(
            name='Task',
        ),
    ]
