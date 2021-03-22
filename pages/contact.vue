<template>
  <div>
    <div class="container">
      <SectionContactItems />
      <ContactMap />
      <SectionContactForm class="py-32"  />
    </div>
  </div>
</template>

<script>
import SectionContactItems from "@/components/contact/SectionContactItems.vue";
import ContactMap from "@/components/contact/ContactMap.vue";
import SectionContactForm from "@/components/contact/SectionContactForm.vue";

export default {
  components: {
    SectionContactItems,
    SectionContactForm,
    ContactMap,
  },
  head(){
    return {
      title: this.$t('contact.head.title'),
      titleTemplate: '%s | Railab',
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
    }
  }
};
</script>

