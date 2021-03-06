"""Master Version search Module"""
from django.db import models

class MasterVersion(models.Model):
    """Master Version search Model"""
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    year = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    formats = models.JSONField()
    labels = models.CharField(max_length=50, blank=True)
    notes = models.CharField(max_length=200)
    thumb = models.CharField(max_length=200)