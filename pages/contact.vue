<template>
    <main>
        <h2># Contact</h2>
        <section class="contact">
            <p class="description">
                Do you have a proposal or a business idea? Feel free to get in
                touch via email or drop me a message through any of my social
                media profiles.
            </p>
            <div class="links">
                <a href="mailto:hello@angelaguirre.dev"
                    >hello@angelaguirre.dev</a
                >
                <ul class="social-media">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/angel-aguirrel/"
                            target="_blank"
                            >LinkedIn</a
                        >
                    </li>
                    <li>
                        <a href="https://github.com/angeloxlan" target="_blank"
                            >Github</a
                        >
                    </li>
                    <li>
                        <a href="https://twitter.com/angeloxlan" target="_blank"
                            >Twitter</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/angeloxlan/"
                            target="_blank"
                            >Instagram</a
                        >
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'Contact',
})
</script>

<style lang="scss" scoped>
main {
    @apply flex flex-col gap-6 max-w-[768px] min-h-[75vh] w-11/12 mx-auto mb-16;
    @apply md:w-3/4;

    h2 {
        @apply font-jetbrains font-bold text-2xl mb-2;
        @apply md:text-3xl md:mt-16;
    }

    section.contact {
        @apply flex flex-col items-center justify-start gap-8;
        @apply md:flex-row;

        p {
            @apply font-sourcecode relative ml-4;
        }

        p:before {
            content: '>';
            position: absolute;
            top: -0.1rem;
            transform: translateX(-15px);
        }

        .links {
            @apply font-jetbrains flex flex-col gap-4 w-full font-bold text-lg;

            .social-media {
                @apply underline;
            }
        }
    }
}
</style>
