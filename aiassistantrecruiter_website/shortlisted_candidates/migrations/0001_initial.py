# Generated by Django 3.0.3 on 2020-07-04 10:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('job_posting', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShortlistedCandidates',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('candidate_image', models.ImageField(default='default.jpg', upload_to='')),
                ('candidate_name', models.CharField(max_length=300, null=True)),
                ('candidate_email', models.EmailField(default=None, max_length=254, null=True)),
                ('candidate_phone', models.CharField(max_length=300, null=True)),
                ('candidate_institute', models.CharField(max_length=500, null=True)),
                ('candidate_degree', models.CharField(max_length=500, null=True)),
                ('candidate_cgpa', models.FloatField(null=True)),
                ('candidate_match', models.FloatField(null=True)),
                ('candidate_location', models.CharField(max_length=400, null=True)),
                ('candidate_gender', models.CharField(max_length=200, null=True)),
                ('candidate_resume_path', models.CharField(max_length=100, null=True)),
                ('job_posting_reference', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shortlisted_candidates_posting_r', to='job_posting.JobPosting')),
            ],
        ),
    ]
