<template>
  <main id="main-content">
    <div class="container">
      <SectionIntro />
      <ServiceItemList />
      <SectionTelegram />
      <SectionSello />
    </div>
    <ContactShorcut />
  </main>
</template>

<script>
import SectionIntro from "@/components/services/SectionIntro.vue";
import ServiceItemList from "@/components/services/ServiceItemList.vue";
import SectionTelegram from "@/components/services/SectionTelegram.vue";
import SectionSello from "@/components/services/SectionSello.vue";
import ContactShorcut from "@/components/contact/ContactShorcut.vue";

export default {
  components: {
    SectionIntro,
    ServiceItemList,
    SectionTelegram,
    SectionSello,
    ContactShorcut,
  },
  head() {
    return {
      title: this.$t("services.head.title"),
      titleTemplate: "%s | Railab",
      meta: [

        {
          hid: "description",
          name: "description",
          content: this.$t("services.head.description"),
        },
        
        // og
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("services.head.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("services.head.description"),
        },
      ],
    };
  },
};
</script>

