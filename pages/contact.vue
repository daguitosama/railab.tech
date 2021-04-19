<template>
  <div>
    <div class="container">
      <SectionContactItems />
      <ContactMap />
    </div>
    <LazyHydrate when-idle>
      <SectionContactForm class="py-32" />
    </LazyHydrate>
  </div>
</template>

<script>
import SectionContactItems from "@/components/contact/SectionContactItems.vue";
import ContactMap from "@/components/contact/ContactMap.vue";
import SectionContactForm from "@/components/contact/SectionContactForm.vue";
import LazyHydrate from "vue-lazy-hydration";
export default {
  layout: "use-global-notifications",
  components: {
    LazyHydrate,
    SectionContactItems,
    SectionContactForm,
    ContactMap,
  },
  head() {
    return {
      title: this.$t("contact.head.title"),
      titleTemplate: "%s | Railab",
      meta: [
        // og
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("contact.head.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("contact.head.description"),
        },
      ],
    };
  },
};
</script>

