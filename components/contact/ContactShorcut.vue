<template>
  <section class="mt-16 md:mt-20 lg:mt-24">
    <div
      class="bg-gray-100 dark:bg-gray-800   py-32 text-center "
    >
      <h2 class="font-extrabold text-3xl md:text-5xl opacity-80">
        {{ contactText }}
      </h2>
      <div class="mt-4">
        <a 
        :href="contactLink.link" 
        :title="contactLink.tooltip"
        class="text-lg  font-semibold opacity-75 hover:opacity-100 transform transition-opacity duration-150"
        >
          {{ contactLink.body }} →
        </a>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contactText: {
      type: String,
      default: "Contáctenos",
    },
    contactLink: {
      type: Object,
      default: () => ({
        link: "#",
        body: "Ir al Contacto",
        tooltip: "Enlace a la página de contacto",
      }),
    },
  },
};
</script>

<style>
</style>