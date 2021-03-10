<template>
  <section class="text-center flex flex-col items-center">
    <AppHeading class="max-w-md" :sectionHeading="sectionHeading" />
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
      :href="groupLink.link" 
      class=" text-lg opacity-70 font-semibold">{{ groupLink.body }} →</a>
    </div>

    <div class="mt-10">
        <p class="text-lg opacity-75 max-w-md"> {{description}} </p>
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
      default: "Asesoría Técnica",
    },
    groupLink: {
      type: Object,
      default: () => ({
        link: "#",
        body: "Ir al grupo",
        tooltip: "Enlace al grupo de Telegram",
      }),
    },
    description:{
        type:String,
        default:`No todos los problemas son tan graves como para venir a nuestro 
        taller. Contamos con una comunidad internacional para la gestión de la 
        información y el conocimiento en Telegram. Si desea aprender a como 
        solucionar sus propios problemas únase al grupo Railab Macbook Support. 
        El objetivo del grupo es ayudar de manera gratuita a usuarios de Mac’s a 
        resolver dificultades que se dan en el día a día. La dinámica es tipo fórum, con la participación conjunta entre administradores del grupo y usuarios. 
        La solución a sus problemas está ahí.`
    }
  },
};
</script>

<style>
</style>