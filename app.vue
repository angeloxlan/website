<template>
    <div class="layout-default">
        <SiteHeader />
        <NuxtPage />
        <SiteFooter />
    </div>
</template>

<style lang="scss">
.layout-default {
    @apply container mx-auto flex flex-col h-full;
}
</style>
