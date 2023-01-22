<template>
    <main>
        <section class="description">
            <h2># My Work</h2>
            <p>
                I have put together a selection of personal projects that I have
                worked on, using technologies that I am interested in and
                excited about.
            </p>
        </section>

        <section class="projects">
            <div v-for="project in projects" :key="project.id" class="project">
                <img :src="project.image" />
                <div class="project-info">
                    <h3># {{ project.name }}</h3>
                    <p class="project-description">
                        {{ project.description }}
                    </p>
                    <div class="project-tags">
                        <span v-for="tag in project.tags" :key="tag" class="tag"
                            >#{{ tag }}</span
                        >
                    </div>
                    <div class="project-links">
                        <a :href="project.liveLink" target="_blank">live</a>
                        <a
                            v-for="link in project.codeLinks"
                            :key="link"
                            :href="link"
                            target="_blank"
                            >code</a
                        >
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'Pomodoro',
                    description:
                        'Designed specifically for the Pomodoro Technique, this web app offers a timer to enhance your productivity.',
                    image: require('@/assets/img/projects/frame_pomodoro.png'),
                    tags: ['Vue.JS', 'TailwindCSS', 'Pinia'],
                    liveLink: 'https://pomodoro.angelaguirre.dev',
                    codeLinks: ['https://github.com/angeloxlan/pomodoro'],
                },
                {
                    id: 2,
                    name: 'Movies Library',
                    description:
                        'This movie library allows you to explore a wide range of popular and upcoming films, making it easy to find new titles to watch.',
                    image: require('@/assets/img/projects/frame_movies.png'),
                    tags: ['Vue.JS', 'Vue-Router', 'TailwindCSS', 'Pinia'],
                    liveLink: 'https://movies.angelaguirre.dev',
                    codeLinks: ['https://github.com/angeloxlan/movies'],
                },
            ],
        }
    },
}
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

    section.projects {
        @apply relative flex flex-col gap-10;

        .project {
            @apply flex flex-col justify-center items-center text-black;
            @apply md:flex-row;

            img {
                @apply w-4/5;
                @apply md:w-2/3;
            }

            .project-info {
                @apply relative flex flex-col justify-around p-3 bg-usr-soft-red/[.8] w-5/6 rounded-lg min-h-[200px] -top-14;

                h3 {
                    @apply font-jetbrains font-bold;
                }

                .project-description {
                    @apply font-sourcecode text-sm;
                }

                .project-tags {
                    @apply flex flex-wrap gap-2;

                    .tag {
                        @apply font-sourcecode text-xs text-slate-700;
                    }
                }

                .project-links {
                    @apply flex gap-6 justify-center;

                    a {
                        @apply font-sourcecode underline;
                    }
                }
            }
        }

        .project:nth-child(odd) {
            .project-info {
                @apply md:top-0 md:-ml-20;
            }
        }

        .project:nth-child(even) {
            @apply md:flex-row-reverse;

            .project-info {
                @apply md:top-0 md:-mr-20;
            }
        }
    }
}
</style>
