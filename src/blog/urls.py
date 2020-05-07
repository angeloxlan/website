from django.urls import path, re_path

# VIEWS
from . import views

urlpatterns = [
    path('', views.blog, name='blog'),
    path('page/<int:page>/', views.blog, name='blog_pages'),
    path('post/<int:post_id>/', views.select_post_by_id, name="post_view")
]