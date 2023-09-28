<template>
    <main>
        <section class="hero">
            <div class="description">
                <h1>Angel Aguirre</h1>
                <p>SOFTWARE ENGINEER, BACKEND DEVELOPER</p>
            </div>
            <img src="@/assets/img/programming-bro.svg" alt="Hero" loading="lazy"/>
        </section>
        <!-- end-hero -->

        <section class="about-me">
            <img src="@/assets/img/code-typing-pana.svg" alt="About me" loading="lazy"/>
            <div class="description">
                <h2>About Me</h2>
                <p>
                    I am an enthusiastic software developer with a strong
                    passion for technology. Continuously learning and growing, I
                    am committed to finding solutions to real-world problems and
                    staying ahead of the curve in the industry.
                </p>
                <UiSiteButton>
                    <NuxtLink to="/about">more about me</NuxtLink>
                </UiSiteButton>
            </div>
        </section>
        <!-- end-about-me -->

        <section class="my-work">
            <img src="@/assets/img/hand-coding-bro.svg" alt="My work" loading="lazy"/>
            <div class="description">
                <h2>My Work</h2>
                <p>
                    With a focus on developing highly efficient web
                    applications, websites, and APIs. My portfolio features a
                    diverse range of projects I have completed, showcasing my
                    skills and expertise. Take a look and see a selection of the
                    projects I have worked on.
                </p>
                <UiSiteButton>
                    <NuxtLink to="/work">my projects</NuxtLink>
                </UiSiteButton>
            </div>
        </section>
        <!-- end-my-work -->

        <section class="contact">
            <div class="description">
                <h2>Let's build something together</h2>
                <UiSiteButton>
                    <NuxtLink to="/contact">let's chat</NuxtLink>
                </UiSiteButton>
            </div>
        </section>
        <!-- end-contact -->
    </main>
</template>

<style lang="scss" scoped>
main {
    @apply flex flex-col gap-0 px-6;
    @apply md:gap-20;

    .hero {
        @apply relative flex flex-col flex-auto items-center justify-center min-h-100;
        @apply md:flex-row;

        .description {
            @apply absolute bottom-24 text-center z-10;
            @apply md:left-20 md:relative md:bottom-0;

            h1 {
                @apply font-jetbrains font-bold text-3xl mb-2;
                @apply md:text-6xl;
            }

            p {
                @apply font-sourcecode text-sm;
                @apply md:text-lg;
            }
        }

        img {
            @apply absolute w-2/3 max-h-72 bottom-20 opacity-30;
            @apply md:relative md:w-1/3 md:max-h-full md:bottom-0 md:opacity-100;
        }
    }

    .about-me {
        @apply relative flex flex-col flex-auto items-center justify-center min-h-100;

        .description {
            @apply flex flex-col justify-center items-center gap-3 absolute bottom-0 text-center z-10;

            h2 {
                @apply font-jetbrains font-bold text-3xl mb-2;
                @apply md:text-6xl;
            }

            p {
                @apply font-sourcecode text-sm text-center mx-auto;
                @apply md:text-lg md:text-left md:w-1/3;
            }
        }

        img {
            @apply absolute w-2/3 max-h-72 opacity-30;
        }
    }

    .my-work {
        @apply relative flex flex-col flex-auto gap-12 items-center justify-center min-h-100;
        @apply md:flex-row;

        .description {
            @apply flex flex-col justify-center items-center gap-3 absolute bottom-0 text-center z-10;
            @apply md:relative md:bottom-0 md:w-1/3;

            h2 {
                @apply font-jetbrains font-bold text-3xl mb-2;
                @apply md:text-6xl;
            }

            p {
                @apply font-sourcecode text-sm text-center mx-auto;
                @apply md:text-lg md:text-left;
            }
        }

        img {
            @apply absolute max-h-72 opacity-30;
            @apply md:relative md:max-h-96 md:opacity-100;
        }
    }

    .contact {
        @apply flex flex-col items-center justify-center;

        .description {
            @apply flex flex-col flex-auto gap-4 items-center justify-center w-1/2 text-center min-h-100;

            h2 {
                @apply font-jetbrains font-bold text-3xl mb-2;
                @apply md:text-6xl;
            }

            p {
                @apply font-sourcecode text-sm text-center mx-auto w-2/3;
                @apply md:text-lg;
            }
        }
    }
}
</style>
