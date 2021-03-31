<template>
  <div>
    <transition name="fade">
      <div
        v-if="isNotificationActive"
        class="fixed top-0 left-0 w-full z-50 p-6 bg-white dark:bg-surface-dark shadow-2xl md:text-center font-semibold"
      >
        {{ notification }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("appNotification/", [
      "notification",
      "isNotificationActive",
    ]),
  },
};
</script>

<style>
</style>