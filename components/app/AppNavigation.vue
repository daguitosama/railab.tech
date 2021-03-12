<template>
  <div
    class="fixed top-0 left-0 w-full z-20 bg-surface-light dark:bg-surface-dark transition-colors duration-300 ease-linear"
  >
    <header class="container flex items-center justify-between">
      <nav class="flex items-baseline py-6 w-full justify-between">
        <div class="w-28">
          <nuxt-link
            :to="localePath('/')"
            class="flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
          >
          <Logo />
          </nuxt-link>
        </div>

        <!-- desktop links -->
        <ul class="hidden md:flex space-x-8 text-lg">
          <li class="">
            <nuxt-link
              :to="localePath('/')"
              exact=""
              :title="$t('common.navigation.services.tooltip')"
              :class="{ 'nuxt-link-exact-active': isOnPath('/') }"
              class="text-lg opacity-50 hover:opacity-100 rounded-lg px-1   transition-all duration-100 focus:outline-none focus:border-primary-light focus-visible:ring-4 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
              >{{ $t("common.navigation.services.body") }}</nuxt-link
            >
          </li>
          <li class="">
            <nuxt-link
              :to="localePath('contact')"
              exact=""
              :title="$t('common.navigation.contact.tooltip')"
              :class="{ 'nuxt-link-exact-active': isOnPath('/') }"
              class="text-lg opacity-50 hover:opacity-100 rounded-lg px-1  transition-all duration-100 focus:outline-none  focus-visible:ring-4 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
              >{{ $t("common.navigation.contact.body") }}</nuxt-link
            >
          </li>
        </ul>
        <!-- utilities -->
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
  methods: {
    isOnPath(path /* string */) {
      return this.$route.name.startsWith(path);
    },
  },
};
</script>

<style>
.nuxt-link-exact-active{
@apply opacity-100 font-semibold;
}
</style>