# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contributor',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=254, blank=True)),
                ('email', models.EmailField(max_length=254, blank=True)),
                ('website', models.CharField(max_length=254, blank=True)),
                ('about', tinymce.models.HTMLField(blank=True)),
                ('gh_login', models.CharField(max_length=254)),
                ('gh_url', models.CharField(max_length=254)),
            ],
            options={
                'ordering': ('-modified', '-created'),
                'abstract': False,
                'get_latest_by': 'modified',
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(unique=True, max_length=254)),
                ('slug', models.SlugField(blank=True)),
                ('about', models.TextField(blank=True)),
                ('gh_name', models.CharField(max_length=254)),
                ('gh_id', models.IntegerField()),
                ('gh_url', models.CharField(max_length=254, blank=True)),
            ],
            options={
                'ordering': ('-modified', '-created'),
                'abstract': False,
                'get_latest_by': 'modified',
            },
        ),
        migrations.CreateModel(
            name='ProCon',
            fields=[
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('project', models.ForeignKey(primary_key=True, db_column=b'project_id', serialize=False, to='projects.Project')),
                ('contributor', models.ForeignKey(to='projects.Contributor', db_column=b'contributor_id')),
            ],
            options={
                'ordering': ('-modified', '-created'),
                'abstract': False,
                'get_latest_by': 'modified',
            },
        ),
    ]
