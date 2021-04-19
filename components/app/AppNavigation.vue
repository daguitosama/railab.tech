<template>
  <header
    id="main-navigation"
    ref="main_navigation"
    class="fixed top-0 left-0 w-full z-30 bg-surface-light dark:bg-surface-dark transition-all duration-300 ease-linear especial-shadow"
  >
    <AppNavigationMobile :links="Links" />
    <!-- desktop -->
    <AppNavigationLarge :links="Links" />
  </header>
</template>

<script>
import { navigationLinks } from "@/data/data.js";
import AppNavigationMobile from '@/components/app/AppNavigationMobile.vue'
import AppNavigationLarge from "@/components/app/AppNavigationLarge.vue";
import AppMobileNavigationLink from "@/components/app/AppMobileNavigationLink.vue";
import Logo from "@/components/icons/Logo.vue";
import ColorModeCtrl from "@/components/app/ColorModeCtrl.vue";
import AppLangSwitcher from "@/components/app/AppLangSwitcher.vue";
import AppNavigationBurgerButton from "@/components/app/AppNavigationBurgerButton.vue";
import ContactItemButton from "@/components/contact/ContactItemButton.vue";
import Telegram from "@/components/icons/Telegram.vue";
import WhatsApp from "@/components/icons/WhatsApp.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Twitter from "@/components/icons/Twitter.vue";
import { useEventListener } from "@vueuse/core";
import { ref } from "@vue/composition-api";
export default {
  components: {
    AppNavigationLarge,
    AppMobileNavigationLink,
    AppNavigationMobile,
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

  data() {
    return {
      Links: navigationLinks,
    };
  },

  methods: {
    isOnPath(path /* string */) {
      return this.$route?.name?.startsWith(path);
    },
  },

  setup() {
    let navOpen = ref(false);
    let lang_menu = ref(null);

    useEventListener(lang_menu, "click", onMenuClick);

    function onMenuClick(evt) {
      // if is an anchor close the menu
      if (evt?.target?.tagName === "A") {
        toogleNav();
      }
    }

    function toogleNav() {
      navOpen.value = !navOpen.value;
      if (process.client) {
        if (navOpen.value) {
          document.body.classList.add("overflow-hidden", "absolute", "inset-0");
        } else {
          document.body.classList.remove(
            "overflow-hidden",
            "absolute",
            "inset-0"
          );
        }
      }
    }

    return {
      // refs
      lang_menu,
      // state
      navOpen,
      // function
      toogleNav,
    };
  },
};
</script>

