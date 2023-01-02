<template>
    <div>
        <div class="container">
            <SectionIntro />
            <ServiceItemList />
            <SectionTelegram />
            <SectionSello />
        </div>
    </div>
</template>

<script setup>
import SectionIntro from "~/components/services/SectionIntro.vue";
import SectionSello from "~/components/services/SectionSello.vue";
import SectionTelegram from "~/components/services/SectionTelegram.vue";
import ServiceItemList from "~/components/services/ServiceItemList.vue";
const { locale, t } = useI18n();

const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: "id",
    addSeoAttributes: true,
});

// canonical
const canonical = computed(
    () => head.value?.link.filter((link) => link.rel == "canonical")[0].href
);

useHead({
    title: t("services.meta.title"),
    titleTemplate: "%s | Railab",

    meta: [
        {
            hid: "title",
            name: "title",
            content: t("services.meta.title"),
        },

        {
            hid: "description",
            name: "description",
            content: t("services.meta.description"),
        },

        // og
        {
            hid: "og:title",
            property: "og:title",
            content: t("services.meta.title"),
        },
        {
            hid: "og:description",
            property: "og:description",
            content: t("services.meta.description"),
        },

        {
            hid: "og:site_name",
            property: "og:site_name",
            content: t("services.meta.og_site_name"),
        },

        { hid: "og:type", property: "og:type", content: "website" },

        {
            hid: "og:url",
            property: "og:url",
            content: canonical.value,
        },

        {
            hid: "og:image",
            property: "og:image",
            content: "https://railab.tech/img/railab-social-image-1500x500.jpg",
        },
        {
            hid: "og:image:secure_url",
            property: "og:image:secure_url",
            content: "https://railab.tech/img/railab-social-image-1500x500.jpg",
        },

        {
            hid: "og:image:alt",
            property: "og:image:alt",
            content: t("services.meta.og_image_alt"),
        },

        // twitter
        {
            hid: "twitter:card",
            name: "twitter:card",
            content: "summary_large_image",
        },

        {
            hid: "twitter:url",
            name: "twitter:url",
            content: canonical.value,
        },

        {
            hid: "twitter:title",
            name: "twitter:title",
            content: t("services.meta.title"),
        },

        {
            hid: "twitter:description",
            name: "twitter:description",
            content: t("services.meta.description"),
        },

        {
            hid: "twitter:image",
            name: "twitter:image",
            content: "https://railab.tech/img/railab-social-image-1500x500.jpg",
        },
    ],
});
</script>
