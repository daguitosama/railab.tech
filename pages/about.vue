<template>
  <div class="min-h-84 pb-20 pt-10">
    <div class="container flex justify-center items-center">
      <div class="max-w-lg">
        <AppHeading :sectionHeading="$t('about.heading')" />
        <div class="mt-6 space-y-4  opacity-80">
          <p class="">{{ $t("about.description.p1") }}</p>
          <p class="">{{ $t("about.description.p2") }}</p>
          <p class="">{{ $t("about.description.p3") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeading from "~/components/app/AppHeading.vue";
import ContactShorcut from "@/components/contact/ContactShorcut.vue";
export default {
  components: {
    AppHeading,
    ContactShorcut,
  },
  props: {
    heading: {
      type: String,
      default: "About us",
    },
    description: {
      type: String,
      default: "About us description",
    },
  },
  head() {
    return {
      title: this.$t("about.head.title"),
      titleTemplate: "%s | Railab",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("about.head.description"),
        },

        // og
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("about.head.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("about.head.description"),
        },
      ],
    };
  },
};
</script>

<style>
</style>
AppHeading