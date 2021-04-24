<template>
  <div >
    <div class="container">
      <SectionIntro />
      <ServiceItemList />
      <SectionTelegram />
      <SectionSello />
    </div>
  </div>
</template>

<script>
import SectionIntro from "@/components/services/SectionIntro.vue";
import ServiceItemList from "@/components/services/ServiceItemList.vue";
import SectionTelegram from "@/components/services/SectionTelegram.vue";
import SectionSello from "@/components/services/SectionSello.vue";

export default {
  components: {
    SectionIntro,
    ServiceItemList,
    SectionTelegram,
    SectionSello,
  },
  computed: {
    langPath() {
      return this.$i18n.locale == this.$i18n.defaultLocale
        ? ""
        : this.$i18n.locale + "/";
    },
  },
  head() {
    return {
      title: this.$t("services.meta.title"),
      titleTemplate: "%s | Railab",

      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$t("services.meta.title"),
        },

        {
          hid: "description",
          name: "description",
          content: this.$t("services.meta.description"),
        },

        // og
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("services.meta.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("services.meta.description"),
        },

        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.$t("services.meta.og_site_name"),
        },

        { hid: "og:type", property: "og:type", content: "website" },

        {
          hid: "og:url",
          property: "og:url",
          content: `https://railab.tech/${this.langPath}`,
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
          content: this.$t("services.meta.og_image_alt"),
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
          content: `https://railab.tech/${this.langPath}`,
        },

        {
          hid: "twitter:title",
          name: "twitter:title",
          content:  this.$t("services.meta.title"),
        },

        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("services.meta.description"),
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://railab.tech/img/railab-social-image-1500x500.jpg",
        },
      ],

      script: [
        // json ld
        {
          type: "application/ld+json",
          json: {
            ...this.$t('services.meta.linked_data'),
            url:`https://railab.tech/${this.langPath}`,
            description:this.$t("services.meta.description")
          },
        },
      ],
    };
  },
};
</script>



