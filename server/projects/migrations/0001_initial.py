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
                ('name', models.CharField(max_length=254, blank=True)),
                ('slug', models.CharField(max_length=254, blank=True)),
                ('email', models.EmailField(max_length=254, blank=True)),
                ('website', models.CharField(max_length=254, blank=True)),
                ('about', tinymce.models.HTMLField(blank=True)),
                ('gh_login', models.CharField(max_length=254)),
                ('gh_url', models.CharField(max_length=254)),
                ('gh_id', models.IntegerField()),
                ('gh_html', models.CharField(max_length=254, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=254)),
                ('slug', models.CharField(max_length=254, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProCon',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('contributor', models.ForeignKey(to='projects.Contributor')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=254)),
                ('slug', models.SlugField(blank=True)),
                ('about', tinymce.models.HTMLField(blank=True)),
                ('gh_name', models.CharField(max_length=254, blank=True)),
                ('gh_id', models.IntegerField(null=True, blank=True)),
                ('gh_url', models.CharField(max_length=254, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProLan',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('language', models.ForeignKey(to='projects.Language')),
                ('project', models.ForeignKey(to='projects.Project')),
            ],
        ),
        migrations.CreateModel(
            name='ProRol',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('contributor', models.ForeignKey(to='projects.Contributor')),
                ('project', models.ForeignKey(to='projects.Project')),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('role', models.CharField(max_length=254, blank=True)),
                ('slug', models.CharField(max_length=254, blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='prorol',
            name='role',
            field=models.ForeignKey(to='projects.Role'),
        ),
        migrations.AddField(
            model_name='procon',
            name='project',
            field=models.ForeignKey(to='projects.Project'),
        ),
    ]
