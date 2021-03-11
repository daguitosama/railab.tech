<template>
  <div
    class="fixed top-0 left-0 w-full z-20 bg-surface-light dark:bg-surface-dark transition-colors duration-300 ease-linear"
  >
    <header class="container flex items-center justify-between">
      <nav class="flex items-baseline py-6 w-full justify-between">
        <div class="w-28">
          <Logo />
        </div>

        <!-- desktop links -->
        <ul class="hidden md:flex space-x-8 text-lg">
          <li class="opacity-100 font-semibold">Services</li>
          <li class="opacity-70">Store</li>
          <li class="opacity-70">Contact</li>
        </ul>
        <div class="hidden md:flex space-x-2">
          <ColorModeCtrl />
          <div class="w-8 h-8">
            <AppLangSwitcher  />
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import Logo from "@/components/icons/Logo.vue";
import ColorModeCtrl from "@/components/app/ColorModeCtrl.vue";
import AppLangSwitcher from "@/components/app/AppLangSwitcher.vue";

export default {
  components: {
    Logo,
    ColorModeCtrl,
    AppLangSwitcher,
  },
};
</script>

<style>
</style>