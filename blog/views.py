from django.core.paginator import Paginator
from django.core.paginator import InvalidPage
from django.shortcuts import redirect, render

# Importing the models
from . models import Posts

# Create your views here.
def blog(request, page=1):
    # We get all the posts in the database
    posts = Posts.objects.all()

    # Change evert date_created field to the format 'Jan 1, 2020'
    for post in posts:
        post.date_created = post.date_created.strftime('%b %d, %Y')

    # Create the paginator with the number of posts per page
    paginator = Paginator(posts, 5)

    # Verify if the requested page is available
    try:
        # Get the requested page
        post_selected = paginator.page(page)
        return render(request, 'blog.html', {'blog_content': post_selected})
    except InvalidPage:
        return redirect('blog')

def select_post_by_id(request, post_id):
    """
    This function gets the specific post by the given id
    """
    post_requested = Posts.objects.get(pk=post_id)
    # We format the date_created field to this 'Jan 1, 2020'
    post_requested.date_created = post_requested.date_created.strftime('%b %d, %Y')
    return render(request, 'post.html', {'post_content': post_requested})
