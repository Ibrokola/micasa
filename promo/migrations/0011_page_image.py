# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-30 06:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('promo', '0010_auto_20170629_0048'),
    ]

    operations = [
        migrations.AddField(
            model_name='page',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
