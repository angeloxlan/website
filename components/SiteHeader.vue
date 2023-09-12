<template>
    <header>
        <div class="mobile-navbar">
            <button
                class="burger-icon"
                aria-label="Burger menu"
                @click="toggleSidemenu"
            >
                <svg class="w-8" fill="none" viewBox="0 0 78 62">
                    <path
                        fill="#FBFBFB"
                        d="M0 24h71a7 7 0 1 1 0 14H0V24Zm0 24h45a7 7 0 1 1 0 14H0V48ZM0 0h58a7 7 0 1 1 0 14H0V0Z"
                    />
                </svg>
            </button>
            <Transition name="side-menu">
                <div v-show="isSidemenuOpen" class="side-menu__container">
                    <div
                        v-show="isSidemenuOpen"
                        class="side-menu__background"
                        @click="toggleSidemenu"
                    ></div>
                    <Transition name="side-width">
                        <nav v-show="isSidemenuOpen" class="navbar">
                            <ul>
                                <li class="logo">
                                    <img
                                        src="@/assets/img/logo.svg"
                                        alt="Angel Aguirre Logo"
                                    />
                                </li>
                                <li><NuxtLink to="/">/home</NuxtLink></li>
                                <li>
                                    <NuxtLink to="/about">/about-me</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/work">/my-work</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/contact">/contact</NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </Transition>
                </div>
            </Transition>
        </div>
        <!-- end-mobile-navbar -->
        <div class="desktop-navbar">
            <nav class="navbar">
                <ul>
                    <li class="logo">
                        <img
                            src="@/assets/img/logo.svg"
                            alt="Angel Aguirre Logo"
                        />
                    </li>
                    <li><NuxtLink to="/">/home</NuxtLink></li>
                    <li><NuxtLink to="/about">/about-me</NuxtLink></li>
                    <li><NuxtLink to="/work">/my-work</NuxtLink></li>
                    <li><NuxtLink to="/contact">/contact</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <!-- end-desktop-navbar -->
    </header>
</template>

<script>
export default {
    data() {
        return {
            isSidemenuOpen: false,
        }
    },
    watch: {
        $route(to, from) {
            this.isSidemenuOpen = false
        },
    },
    methods: {
        toggleSidemenu() {
            this.isSidemenuOpen = !this.isSidemenuOpen
        },
    },
}
</script>

<style lang="scss" scoped>
header {
    @apply font-jetbrains font-bold py-8 text-lg text-slate-400;

    div.mobile-navbar {
        @apply relative md:hidden;

        button.burger-icon {
            @apply ml-4;
        }

        div.side-menu__container {
            @apply fixed top-0 left-0 h-screen w-screen z-20;

            div.side-menu__background {
                @apply absolute bg-slate-600 opacity-75 h-full w-full z-30;
            }
        }

        nav.navbar {
            @apply absolute bg-usr-blue h-screen overflow-y-auto overflow-x-hidden z-40;

            ul {
                @apply flex flex-col justify-center gap-2 w-64 px-5 py-8;

                li.logo {
                    @apply flex justify-center text-2xl text-white;

                    img {
                        @apply w-14;
                    }
                }

                li:not(.logo) {
                    @apply pl-4;
                }
            }
        }
    }

    div.desktop-navbar {
        @apply hidden md:block;

        nav.navbar {
            @apply relative;
            ul {
                @apply flex justify-center items-center gap-6;

                li.logo {
                    @apply absolute left-0 text-white;

                    img {
                        @apply w-14;
                    }
                }

                a.router-link-exact-active {
                    @apply ml-[15px];
                }
            }
        }
    }
}
</style>
