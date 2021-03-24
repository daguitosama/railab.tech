<template>
  <section class="absolute z-20 -top-4 w-full text-white">
    <div
      class="pb-16 max-w-screen-xl mx-auto md:rounded-3xl bg-gradient-to-br from-primary-dark to-blue-500 via-blue-600 md:flex md:justify-between"
    >
      <!-- copy -->
      <div class=" p-12 text-center md:text-left">
        <h2 class="font-semibold text-3xl md:text-5xl">
          {{ $t("contact.shortcut.heading") }}
        </h2>
        <p class="mt-4">{{ $t("contact.shortcut.description") }}</p>
        <div class="mt-8">
          <nuxt-link
            :to="localePath($t('contact.shortcut.cta.pageName'))"
            :title="$t('contact.shortcut.cta.tooltip')"
            class="bg-white rounded-lg font-semibold text-blue-500 py-3 px-4 hover:bg-gray-200"
          >
            {{ $t("contact.shortcut.cta.body") }}
          </nuxt-link>
        </div>
      </div>
      <!-- img -->
      <div class="mt-20 md:mt-10  relative w-80 mx-auto md:mr-12 h-40 md:w-80  ">
          <img
            src="/img/macbook-air-black.png"
            :alt="$t('services.intro.picture.alt')"
            class="absolute bottom-0 md:top-0 left-0 object-cover w-full "
          />
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