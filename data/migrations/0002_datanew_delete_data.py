# Generated by Django 4.1 on 2022-09-20 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='dataNew',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.SlugField(null=True)),
                ('id_user', models.IntegerField(null=True)),
                ('type', models.CharField(max_length=50, null=True)),
                ('nodeid', models.SlugField(null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='data',
        ),
    ]
