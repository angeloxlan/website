from django.db import models

#External import
from tinymce.models import HTMLField

# Create your models here.
class Posts(models.Model):
    """
    This class will handle the posts information.
    The fields in this class:
    - Title
    - COntent
    - Date of creationg
    - Date for modification
    """
    title = models.CharField(max_length=70)
    content = HTMLField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'