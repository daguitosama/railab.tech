<template>
  <div>
    <AppHeading :sectionHeading="heading" class="text-center" />
    <div class="relative mt-10  h-80 md:h-96">
      <div class="rounded-lg overflow-hidden" ref="mapConatiner">
        <iframe
          v-if="mapNeeded"
          :src="mapSrc"
          :title="mapTitle"
          frameborder="0"
          style="border: 0"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
          lazyload
          loading="lazy"
          class="absolute rounded-lg w-full h-full bg-primary-light"
        ></iframe>
      </div>
      <div class="w-full absolute bottom-0 z-10 flex justify-center">
        <div
          class="max-w-15 md:max-w-sm py-3 px-4 md:px-8 md:py-6 -mb-16 sm:-mb-12 shadow-lg text-center rounded-2xl bg-white dark:bg-gray-800 text-onLight dark:text-onDark"
        >
          <address>{{ address }}</address>
          <p class="mt-2">{{ scheduleTimeStr }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from "@vue/composition-api";
import { useElementVisibility } from "@vueuse/core";
import AppHeading from "@/components/app/AppHeading.vue";
export default {
  components: {
    AppHeading,
  },
  props: {
    heading: {
      type: String,
      default: "Donde encontrarnos",
    },
    mapSrc: {
      type: String,
      default:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5193249822614!2d-82.41616114982733!3d23.114685484832467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd77b1fc030ac7%3A0x9f858e5c9c8fc918!2sRaiLab%20Mac!5e0!3m2!1sen!2scu!4v1615410576692!5m2!1sen!2scu",
    },
    mapTitle: {
      type: String,
      default: "Nuestra localización en el mapa",
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
  methods: {},
  setup() {
    const mapConatiner = ref(null);
    const state = reactive({
      mapConatinerViewed: useElementVisibility(mapConatiner),
      mapNeeded: false,
    });

    watch(
      () => state.mapConatinerViewed,
      (a, b) => {
        if (!state.mapNeeded) {
          state.mapNeeded = true;
        }
      }
    );

    return {
      mapConatiner,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.custom-iframe {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>