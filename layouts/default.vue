<template>
    <div class="layout-default">
        <SiteHeader />
        <Nuxt />
        <SiteFooter />
    </div>
</template>

<script>
export default {
    name: 'LayoutDefault',
}
</script>

<style lang="scss">
.layout-default {
    @apply container mx-auto flex flex-col h-full;
}
</style>
