<template>
    <section class="z-20 w-full text-white">
        <div
            class="max-w-screen-xl mx-auto md:rounded-3xl shadow-2xl bg-gradient-to-br from-primary-dark to-blue-500 via-blue-600 md:flex md:justify-between"
        >
            <!-- copy -->
            <div class="p-12 text-center md:text-left">
                <h2 class="font-semibold text-3xl md:text-5xl">
                    {{ $t("contact.shortcut.heading") }}
                </h2>
                <p class="mt-4">{{ $t("contact.shortcut.description") }}</p>
                <nuxt-link
                    :to="localePath($t('contact.shortcut.cta.pageName'))"
                    :title="$t('contact.shortcut.cta.tooltip')"
                    class="inline-block mt-8 text-blue-500 dark:text-onLight bg-white py-3 px-4 font-semibold hover:bg-gray-200 shadow-xl hover:shadow-2xl transition-all duration-100 focusable-on-visible-amber"
                >
                    {{ $t("contact.shortcut.cta.body") }}
                </nuxt-link>
            </div>
            <!-- map -->
            <!-- 
            <div class="w-full md:w-1/2 h-full p-6">
                <div class="h-60 w-full relative">
                    <Map />
                </div>
            </div>
            -->
        </div>
    </section>
</template>

<script>
import Map from "./Map.vue";
export default {
    components: { Map },
    props: {
        contactText: {
            type: String,
            default: "Contáctenos",
        },
        contactLink: {
            type: Object,
            default: () => ({
                link: "#",
                body: "Ir al Contacto",
                tooltip: "Enlace a la página de contacto",
            }),
        },
    },
};
</script>

<style></style>
