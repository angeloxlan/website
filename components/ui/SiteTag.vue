<template>
    <div class="tag">#{{ tagTitle }}</div>
</template>

<script>
export default {
    props: ['tagTitle'],
}
</script>

<style lang="scss" scoped>
.tag {
    @apply font-jetbrains bg-usr-soft-red text-sm text-black text-center w-fit min-w-[4rem] px-3 py-1 rounded-full hover:scale-110 transition duration-300 ease-in-out;
}
</style>
