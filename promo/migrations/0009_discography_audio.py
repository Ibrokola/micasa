# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-29 06:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('promo', '0008_auto_20170628_0043'),
    ]

    operations = [
        migrations.AddField(
            model_name='discography',
            name='audio',
            field=models.FileField(blank=True, null=True, upload_to='audio/'),
        ),
    ]
