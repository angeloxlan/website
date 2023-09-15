<template>
    <div class="layout-default">
        <SiteHeader />
        <NuxtPage />
        <SiteFooter />
    </div>
</template>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `${titleChunk} - Angel Aguirre • @angeloxlan`
            : 'Angel Aguirre • @angeloxlan'
    },
})
</script>

<style lang="scss">
.layout-default {
    @apply container mx-auto flex flex-col h-full;
}
</style>
