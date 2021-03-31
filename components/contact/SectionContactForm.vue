<template>
  <div class="mt-20 lg:mt-24 container">
    <transition name="fade">
      <div
        v-if="!messageIsSended"
        class="shadow-2xl rounded-3xl bg-gradient-to-br from-primary-dark to-blue-500 via-blue-600 text-white p-6 md:p-12 space-y-10 md:space-y-0 md:flex md:justify-between"
      >
        <div>
          <div class="font-semibold text-4xl md:text-5xl">
            <h1>
              {{ $t("contact.leaveUsAMessage") }}
            </h1>
          </div>
          <p class="mt-8">{{$t('contact.leaveUsAMessageLine')}}</p>
        </div>
        <div class="w-full md:w-1/3">
          <ContactForm v-on:messageSended="onSended" />
        </div>
      </div>
    </transition>
  </div>
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