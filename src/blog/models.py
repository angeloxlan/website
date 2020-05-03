from django.db import models

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
    title = models.CharField(max_length=50)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'