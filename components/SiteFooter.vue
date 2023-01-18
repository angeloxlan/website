<template>
    <footer>Made with ♥ by Angel Aguirre © {{ year }}</footer>
</template>

<script>
export default {
    computed: {
        year() {
            const _date = new Date()
            return _date.getFullYear()
        },
    },
}
</script>

<style lang="scss">
footer {
    @apply text-center text-sm py-5;
}
</style>
