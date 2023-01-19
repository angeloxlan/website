<template>
    <div class="experience-position">
        <div class="experience-title">
            <h3>{{ title }}</h3>
            <div class="line"></div>
            <span class="period">{{ periodStart }} - {{ periodEnd }}</span>
        </div>
        <div class="experience-place">
            <p class="place">{{ place }}</p>
            <p class="company">{{ company }}</p>
        </div>
        <div class="experience-description">
            {{ description }}
        </div>
        <div class="experience-tags">
            <UiSiteTag v-for="tag in tags" :key="tag" :tag-title="tag" />
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'id',
        'title',
        'periodStart',
        'periodEnd',
        'place',
        'company',
        'description',
        'tags',
    ],
}
</script>

<style lang="scss">
.experience-position {
    @apply flex flex-col gap-4 ml-4;

    .experience-title {
        @apply relative flex flex-col;
        @apply md:flex-row md:gap-4;

        h3 {
            @apply font-bold;
        }

        .line {
            @apply hidden;
            @apply md:flex md:flex-row md:flex-1;
        }

        .line:before,
        .line:after {
            content: '';
            flex: 1 1;
            border-bottom: 1px solid white;
            margin: auto;
        }

        .period {
            @apply text-sm italic;
        }
    }

    .experience-title:before {
        content: '>';
        position: absolute;
        top: -0.25rem;
        transform: translateX(-15px);
    }

    .experience-place {
        @apply flex flex-col justify-start text-sm;
        @apply md:flex-row md:gap-8;
    }

    .experience-tags {
        @apply flex flex-wrap gap-4;
    }
}
</style>
