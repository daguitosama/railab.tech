<template>
  <section class="text-center flex flex-col items-center">
    <AppHeading class="max-w-md" :sectionHeading="$t('services.QualityStamp.heading')" />
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

    <div class="mt-10  max-w-md">
      <p class="text-lg  opacity-75">{{ $t('services.QualityStamp.paragraph1') }}</p>
      <ul class="mt-2 ml-4 text-lg ">
        <li v-for="(e, i) in $t('services.QualityStamp.list1')" :key="i">
          {{ e }}
        </li>
      </ul>

      <p class="text-lg mt-10 opacity-75">{{ $t('services.QualityStamp.paragraph2') }}</p>
      <ul class="mt-2 ml-4 text-lg ">
        <li v-for="(e, i) in $t('services.QualityStamp.list2')" :key="i">
          {{ e }}
        </li>
      </ul>
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
      default: "Sello de Calidad Railab",
    },

    description: {
      type: Object,
      default: () => ({
        paragraph1: `Avalamos el perfecto estado de su Macbook por un período de 
          6 meses renovables, ya sea para tranquilidad propia o si desea venderla. 
          Para obtenerlo comuníquese con (nosotros). Los requisitos son:`,
        list1: [
          `Recibir un mantenimiento completo por el taller el cual incluye 
          cambio de pasta térmica, corrección de calles dañadas y cambio de 
          elementos sulfatados.`,
        ],
        paragraph2: `En el caso del Macbook`,
        list2: [
          `Vida de la batería por encima del 85%`,
          `Usar Cargador Apple original del wattage adecuado`,
        ],
      }),
    },
  },
};
</script>

<style>
</style>