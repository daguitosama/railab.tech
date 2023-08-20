<template>
    <div>
        <div class="container">
            <SectionContactItems items />
            <!-- <ContactMap /> -->
        </div>
        <!-- <SectionContactForm class="py-32" /> -->
    </div>
</template>

<script setup>
import SectionContactItems from "@/components/contact/SectionContactItems.vue";
import ContactMap from "@/components/contact/ContactMap.vue";
// import SectionContactForm from "@/components/contact/SectionContactForm.vue";
definePageMeta({ layout: "contact" });
const { t, locale } = useI18n();
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
    title: t("contact.head.title"),
    titleTemplate: "%s | Railab",

    meta: [
        {
            hid: "title",
            name: "title",
            content: t("contact.head.title"),
        },

        {
            hid: "description",
            name: "description",
            content: t("contact.head.description"),
        },

        // og
        {
            hid: "og:title",
            property: "og:title",
            content: t("contact.head.title"),
        },
        {
            hid: "og:description",
            property: "og:description",
            content: t("contact.head.description"),
        },

        {
            hid: "og:site_name",
            property: "og:site_name",
            content: t("contact.head.og_site_name"),
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

        // {
        //     hid: "og:image:alt",
        //     property: "og:image:alt",
        //     content: t("contact.head.og_image_alt"),
        // },

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
            content: t("contact.head.title"),
        },

        {
            hid: "twitter:description",
            name: "twitter:description",
            content: t("contact.head.description"),
        },

        {
            hid: "twitter:image",
            name: "twitter:image",
            content: "https://railab.tech/img/railab-social-image-1500x500.jpg",
        },
    ],
});
</script>
