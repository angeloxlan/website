from django.contrib import admin

# My app
from . models import Posts

# Register your models here.
class PostsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    readonly_fields = ('date_created', 'date_modified')

admin.site.register(Posts, PostsAdmin)