<template>
    <div
        class="bg-surface-light text-onLight dark:bg-surface-dark dark:text-onDark transition-colors duration-300 ease-linear"
    >
        <!-- TODO uncomment comps -->
        <SkipToMainLink />
        <AppNavigation />
        <main id="main-content" tabindex="0" class="focusable-on-visible">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import AppFooter from "~/components/app/AppFooter.vue";
import AppNavigation from "~/components/app/AppNavigation.vue";
import SkipToMainLink from "~/components/app/SkipToMainLink.vue";
</script>
