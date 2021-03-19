<template>
  <section class="mt-20 lg:mt-24">
    <transition name="fade">
      <div v-if="!messageIsSended">
        <div class="font-extrabold text-4xl text-center">
          <h1>
            {{ $t("contact.leaveUsAMessage") }}
          </h1>
        </div>
        <div class="mt-10 max-w-xs mx-auto">
          <ContactForm v-on:messageSended="onSended" />
        </div>
      </div>
    </transition>
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
  data() {
    return {
      messageIsSended: false,
    };
  },
  methods: {
    onSended() {
      this.messageIsSended = true;
    },
  },
};
</script>

<style>
</style>