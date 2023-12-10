# Generated by Django 4.2.6 on 2023-12-10 03:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('country', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('idCity', models.CharField(max_length=3, primary_key=True, serialize=False, verbose_name='idCity')),
                ('name', models.CharField(max_length=25, verbose_name='CityName')),
                ('district', models.CharField(max_length=25, verbose_name='NameOfCity')),
                ('population', models.BigIntegerField(verbose_name='Population')),
                ('id_country', models.ForeignKey(max_length=3, on_delete=django.db.models.deletion.CASCADE, to='country.country', verbose_name='Id Country')),
            ],
            options={
                'verbose_name': 'Name City',
                'verbose_name_plural': 'Name Citys',
                'ordering': ['name'],
                'unique_together': {('name', 'id_country')},
            },
        ),
    ]
