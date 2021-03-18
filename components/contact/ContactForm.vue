<template>
  <div>
    <form
      @submit.prevent
      class="bg-gray-100 dark:bg-gray-800 py-6 px-4 rounded-lg shadow-lg transition-colors duration-300 ease-linear"
    >
      <div>
        <label for="name" class="block ml-2 text-sm">
          {{ $t("contact.form.emailLabel") }}
        </label>
        <input
          type="email"
          name="email"
          required
          :placeholder="$t('contact.form.emailPlaceholder')"
          autocomplete="email"
          class="block w-full mt-1 p-2 rounded-lg shadow dark:bg-gray-700 focus:outline-none focus:ring focus:ring-primary-light dark:focus:ring-primary-dark"
        />
      </div>

      <div class="mt-4">
        <label for="message" class="block ml-2 text-sm">
          {{ $t("contact.form.messageLabel") }}
        </label>
        <textarea
          name="message"
          required
          :placeholder="$t('contact.form.messagePlaceholder')"
          class="block w-full mt-1 p-2 rounded-lg shadow dark:bg-gray-700 focus:outline-none focus:ring focus:ring-primary-light dark:focus:ring-primary-dark"
        />
      </div>

      <div class="mt-6">
        <button
          class="w-full py-2 rounded-lg shadow transition-colors duration-150 text-white bg-primary-light hover:bg-primary-light-hover dark:bg-primary-dark dark:hover:bg-primary-dark-hover focus:outline-none focus-visible:ring focus-visible:ring-primary-light focus-visible:ring-primary-light-hover dark:focus-visible:ring-primary-dark-hover"
        >
          {{ sendBtnLabel }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { isSending: false };
  },

  computed: {
    sendBtnLabel() {
      return this.isSending
        ? this.$t("contact.form.sendButton.sendingLabel")
        : this.$t("contact.form.sendButton.normalLabel");
    },
  },
};
</script>

<style>
</style>