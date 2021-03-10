<template>
  <section class="mt-20 lg:mt-24">
    <div class="font-extrabold text-4xl text-center">
      <h1 >
        {{ heading }}
      </h1>
    </div>
    <div class="mt-10  max-w-xs mx-auto">
    <ContactForm />
    </div>
  </section>
</template>

<script>
import AppHeading from "@/components/app/AppHeading.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
export default {
  components: { AppHeading, ContactForm },
  props: {
    heading: {
      type: String,
      default: "Déjenos un mensaje",
    },
  },
};
</script>

<style>
</style>