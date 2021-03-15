<template>
  <header
    class="fixed top-0 left-0 w-full z-20 bg-surface-light dark:bg-surface-dark transition-colors duration-300 ease-linear"
  >
    <!-- mobile -->
    <div class="md:hidden">
      <nav class="py-6 flex items-baseline justify-between container">
        <div class="w-28">
          <nuxt-link
            :to="localePath('/')"
            class="flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
          >
            <Logo />
          </nuxt-link>
        </div>

        <!-- burger -->
        <div class="relative z-20">
          <AppNavigationBurgerButton
            v-on:toogle="toogleNav"
            :isOpen="navOpen"
          />
        </div>
        <!-- mobile links -->
        <transition name="fade-from-left">
          <div ref="lang_menu" v-show="navOpen" class="fixed inset-0 h-full">
            <ul
              class="px-6 py-7 z-10 w-full h-full overflow-y-auto bg-surface-light dark:bg-surface-dark"
            >
              <!-- logo -->
              <div class="w-28">
                <nuxt-link
                  :to="localePath('/')"
                  class="flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
                >
                  <Logo />
                </nuxt-link>
              </div>
              <!-- links -->
              <li class="mt-10 font-bold text-sm opacity-80">Links</li>
              <div class="mt-4 space-y-4">
                <li
                  class="py-2 pl-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transform transition-colors duration-150"
                  :class="{
                    'bg-gray-100 dark:bg-gray-800': isOnPath('index'),
                  }"
                >
                  <nuxt-link
                    :to="localePath('/')"
                    exact=""
                    :title="$t('common.navigation.services.tooltip')"
                    :class="{
                      'font-semibold text-primary-light dark:text-onDark': isOnPath(
                        'index'
                      ),
                    }"
                    class="h-full block"
                    >{{ $t("common.navigation.services.body") }}</nuxt-link
                  >
                </li>
                <li
                  class="py-2 pl-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transform transition-colors duration-150"
                  :class="{
                    'bg-gray-100 dark:bg-gray-800': isOnPath('contact'),
                  }"
                >
                  <nuxt-link
                    :to="localePath('contact')"
                    exact=""
                    :title="$t('common.navigation.contact.tooltip')"
                    :class="{
                      'font-semibold text-primary-light dark:text-onDark': isOnPath(
                        'contact'
                      ),
                    }"
                    class="h-full block"
                    >{{ $t("common.navigation.contact.body") }}</nuxt-link
                  >
                </li>
              </div>
              <!-- social links -->
              <li class="mt-10 font-bold text-sm opacity-80">Social</li>
              <li class="mt-4">
                <ul class="grid grid-cols-3 gap-4">
                  <li>
                    <ContactItemButton>
                      <Telegram />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <WhatsApp />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <Facebook />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <Twitter />
                    </ContactItemButton>
                  </li>
                </ul>
              </li>
              <!-- utilities -->
              <li class="mt-10 font-bold text-sm opacity-80">Utilities</li>
              <li class="mt-4">
                <ul class="grid grid-cols-3 gap-4">
                  <li>
                    <ContactItemButton>
                      <Telegram />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <WhatsApp />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <Telegram />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <WhatsApp />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <Telegram />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <WhatsApp />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <Telegram />
                    </ContactItemButton>
                  </li>
                  <li>
                    <ContactItemButton>
                      <WhatsApp />
                    </ContactItemButton>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </div>
    <!-- desktop -->
    <div class="hidden md:block">
      <nav class="py-6 flex items-baseline justify-between container relative">
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
              :class="{ 'nuxt-link-exact-active': isOnPath('index') }"
              class="text-lg opacity-50 hover:opacity-100 rounded-lg px-1 transition-all duration-100 focus:outline-none focus:border-primary-light focus-visible:ring-4 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
              >{{ $t("common.navigation.services.body") }}</nuxt-link
            >
          </li>
          <li class="">
            <nuxt-link
              :to="localePath('contact')"
              exact=""
              :title="$t('common.navigation.contact.tooltip')"
              :class="{ 'nuxt-link-exact-active': isOnPath('contact') }"
              class="text-lg opacity-50 hover:opacity-100 rounded-lg px-1 transition-all duration-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
              >{{ $t("common.navigation.contact.body") }}</nuxt-link
            >
          </li>
        </ul>
        <!-- desktop utilities -->
        <div class="hidden md:flex space-x-2">
          <ColorModeCtrl />
          <div class="w-8 h-8">
            <AppLangSwitcher />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/icons/Logo.vue";
import ColorModeCtrl from "@/components/app/ColorModeCtrl.vue";
import AppLangSwitcher from "@/components/app/AppLangSwitcher.vue";
import AppNavigationBurgerButton from "@/components/app/AppNavigationBurgerButton.vue";
import { reactive, ref, toRefs } from "@vue/composition-api";
import { useEventListener } from "@vueuse/core";
import ContactItemButton from "@/components/contact/ContactItemButton.vue";
import Telegram from "@/components/icons/Telegram.vue";
import WhatsApp from "@/components/icons/WhatsApp.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Twitter from "@/components/icons/Twitter.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Logo,
    ColorModeCtrl,
    AppLangSwitcher,
    AppNavigationBurgerButton,
    ContactItemButton,
    Telegram,
    WhatsApp,
    Facebook,
    Twitter,
  },

  computed: {
    ...mapGetters("ui/", ["navOpen"]),
  },

  methods: {
    isOnPath(path /* string */) {
      return this.$route.name.startsWith(path);
    },
    ...mapMutations("ui/", [
      "closeNav",
      'toogleNav',
    ]),
  },
  mounted(){
    let lang_menu = this.$refs['lang_menu'];
    
    let onMenuClickBinded = onMenuClick.bind(this)

    if(process.client){
      lang_menu.addEventListener('click',onMenuClickBinded)
    }


    function onMenuClick(evt) {
      console.log(this)


      // if is an anchor close the menu
      if (evt?.target?.tagName === "A") {
        
        this.toogleNav();
      }
    }
  }
};
</script>

<style>
.nuxt-link-exact-active {
  @apply opacity-100 font-semibold;
}
</style>