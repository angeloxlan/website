from django.views.generic.base import TemplateView

class ProjectsView(TemplateView):

    template_name = 'static_pages/portfolio.html'

    def get_context_data(self, **kwargs):
        """
        We create the portfolio section programmatically by returning a object
        with all the projects information.
        """
        projects = [
            {
                'name': 'Pomodoro',
                'description': 'Manage your time the better way and increase your productivity.',
                'img_src': 'index/img/project-pomodoro.png',
                'url': 'https://timerpomodoro.now.sh/'
            },
        ]
        return {'projects': projects}