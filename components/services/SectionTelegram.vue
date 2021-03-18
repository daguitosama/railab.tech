<template>
  <section class="text-center flex flex-col items-center">
    <AppHeading class="max-w-md" :sectionHeading="$t('services.techAdvise.heading')" />
    <div class="mt-20">
      <div
        class="w-16 h-16 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center from-blue-400 to-blue-800"
      >
        <Plane
          title="Plane"
          class="text-white fill-current transform rotate-45 ml-2 mb-1"
        />
      </div>
    </div>
    <div class=" mt-3">
      <a 
      :href="$t('services.techAdvise.cta.link')"
      :title="$t('services.techAdvise.cta.tooltip')" 
      class=" text-lg opacity-70 hover:opacity-100 transition-opacity duration-150 font-semibold">{{ $t('services.techAdvise.cta.body') }}</a>
    </div>

    <div class="mt-10">
        <p class="text-lg opacity-75  max-w-md"> {{$t('services.techAdvise.description')}} </p>
    </div>
  </section>
</template>

<script>
import Plane from "@/components/icons/Plane.vue";
import AppHeading from "@/components/app/AppHeading.vue";

export default {
  components: {
    Plane,
    AppHeading,
  },
  props: {
    sectionHeading: {
      type: String,
      default: "",
    },
    groupLink: {
      type: Object,
      default: () => ({
        link: "#",
        body: "",
        tooltip: "",
      }),
    },
    description:{
        type:String,
        default:``
    }
  },
};
</script>

<style>
</style>