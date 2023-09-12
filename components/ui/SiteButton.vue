<template>
    <div class="action-btn">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.action-btn {
    @apply font-sourcecode bg-usr-soft-red w-fit min-w-[6rem] rounded-lg hover:scale-110 transition duration-300 ease-in-out;

    * {
        @apply text-black text-center inline-block w-full px-5 py-2;
    }
}
</style>
