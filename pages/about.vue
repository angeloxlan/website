<template>
    <main>
        <section class="description">
            <h2># Who am I?</h2>
            <p>
                As a backend developer, I have been working in web development
                for 4 years. My expertise includes Javascript, Vue.js, PHP,
                Python and SQL. I am always looking to learn and try new
                technologies, as I am passionate about coding and
                self-improvement.
            </p>
            <p>
                When I am not working, I can be found playing video games as a
                hobby.
            </p>
            <p>
                If you have a project that you think I could help with, please
                don't hesitate to
                <NuxtLink to="/contact">reach out and let's discuss</NuxtLink>
                it further.
            </p>
        </section>
        <!-- end-description-who-am-i -->

        <section class="experience">
            <h2># Professional Experience</h2>
            <div class="jobs-container">
                <JobDescription
                    v-for="job in jobs.slice().reverse()"
                    :key="job.id"
                    v-bind="job"
                />
            </div>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'About Me',
})

const jobs = ref([
    {
        id: 1,
        title: 'Backend Developer',
        periodStart: 'jul 2018',
        periodEnd: 'jan 2019',
        place: 'Ver, México',
        company: 'Universidad de Xalapa',
        description:
            'I created a new module for an existing system that allows for the seamless replication of information across multiple information systems.',
        tags: ['C#', 'SQL Server', 'PostgreSQL'],
    },
    {
        id: 2,
        title: 'Frontend - Backend Developer',
        periodStart: 'may 2019',
        periodEnd: 'now 2019',
        place: 'Ver, México',
        company: 'SOLIX México',
        description:
            'I was responsible for the maintenance of legacy applications built in PHP and Laravel, while also developing web applications using HTML, Bootstrap, vanilla JavaScript, and creating RESTful APIs using PHP.',
        tags: ['PHP', 'Laravel', 'Javascript', 'Bootstrap', 'MySQL'],
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        periodStart: 'jan 2021',
        periodEnd: 'Present',
        place: 'Ver, México',
        company: 'Centro Estatal de Información - SSP',
        description:
            'My current work involves developing web apps using HTML, CSS, Javascript and PHP, and maintaining legacy systems built in PHP. I am also implementing Python to automate common tasks.',
        tags: [
            'PHP',
            'Javascript',
            'Python',
            'Bootstrap',
            'MySQL',
            'SQL Server',
        ],
    },
])
</script>

<style lang="scss" scoped>
main {
    @apply flex flex-col gap-14 max-w-[768px] w-11/12 mx-auto mb-16;
    @apply md:w-3/4;

    section.description {
        @apply flex flex-col gap-4;
        @apply md:mt-16;

        h2 {
            @apply font-jetbrains font-bold text-2xl mb-2;
            @apply md:text-3xl;
        }

        p {
            @apply font-sourcecode relative ml-4;
        }

        p:before {
            content: '>';
            position: absolute;
            top: -0.1rem;
            transform: translateX(-15px);
        }
    }

    section.experience {
        h2 {
            @apply font-jetbrains font-bold text-2xl mb-2;
            @apply md:text-3xl;
        }

        .jobs-container {
            @apply flex flex-col gap-20 mt-10;
        }
    }
}
</style>
