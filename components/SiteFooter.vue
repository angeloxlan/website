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
    @apply font-jetbrains text-center text-xs py-5;
}
</style>
