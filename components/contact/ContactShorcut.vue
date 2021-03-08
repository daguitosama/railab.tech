<template>
  <section class="mt-16 md:mt-20 lg:mt-24">
    <div
      class="bg-primary-light dark:bg-primary-dark rounded-2xl px-4 md:px-8 lg:px-16 py-10 text-center md:text-left"
    >
      <h2 class="text-white font-extrabold text-3xl md:text-5xl">
        {{ contactText }}
      </h2>
      <div class="mt-4">
        <a 
        :href="contactLink.link" 
        :title="contactLink.tooltip"
        class="text-lg  font-semibold text-white"
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