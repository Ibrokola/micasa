# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-28 03:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('promo', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='TourDate',
        ),
        migrations.AlterField(
            model_name='about',
            name='image',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='contact',
            name='subject',
            field=models.CharField(max_length=300, verbose_name='Your message'),
        ),
    ]