<template>
  <div>
    <AppHeading
      :sectionHeading="$t('contact.whereToFindUs')"
      class="text-center"
    />
    <div class="relative mt-10 h-80 md:h-96">
      <Map />
      <div
        class="w-full absolute bottom-0 z-10 flex justify-center h-0 bg-gray-300"
      >
        <div
          class="max-w-15 absolute md:max-w-sm px-2 py-4 -top-4 md:-top-12 shadow-lg text-center rounded-2xl bg-white dark:bg-gray-800 text-onLight dark:text-onDark"
        >
          <address>{{ $t("contact.address") }}</address>
          <p class="mt-2">{{ $t("contact.scheduleTimeStr") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeading from "@/components/app/AppHeading.vue";
import Map from "@/components/contact/Map.vue";
export default {
  components: {
    AppHeading,
    Map,
  },
  props: {
    heading: {
      type: String,
      default: "Donde encontrarnos",
    },
    
    address: {
      type: String,
      default: "General Lee e/ Vía Blanca y Pasaje Oeste",
    },
    scheduleTimeStr: {
      type: String,
      default: "10am a 5pm",
    },
  },
  
};
</script>

