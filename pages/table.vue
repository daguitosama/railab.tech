<template>
  <div
    class="
      min-h-screen
      w-full
      bg-surface-light
      dark:bg-surface-dark
      text-onLight
      dark:text-onDark
      flex flex-col
      items-center
      justify-center
      gap-6
    "
  >
    <Burger :isOpen="isOpen" @toogle="toogleOpen"/>
  </div>
</template>

<script>
import { ref } from "vue-demi";
import Burger from "~/components/app/AppNavigationBurgerButton.vue";
export default {
  layout: "empty",
  components: { Burger },

  setup() {
    var isOpen = ref(false);

    function toogleOpen() {
      isOpen.value = !isOpen.value;
    }

    return {
      isOpen,
      toogleOpen,
    };
  },
};
</script>

<style>
</style>