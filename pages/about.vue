<template>
  <div class="min-h-screen">
    <div class="container flex flex-col items-center">
      <AppHeading :sectionHeading="$t('about.heading')" />
      <div class="mt-6 space-y-4 max-w-xs opacity-80 ">
        <p class="">{{ $t("about.description.p1") }}</p>
        <p class="">{{ $t("about.description.p2") }}</p>
        <p class="">{{ $t("about.description.p3") }}</p>
      </div>
    </div>
    <ContactShorcut />
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
  head(){
    return {
      title: this.$t('about.head.title'),
      titleTemplate: '%s | Railab'
    }
  }
};
</script>

<style>
</style>
AppHeading