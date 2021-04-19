<template>
  <div class="lg:hidden">
    <!-- mobile -->
    <nav class="py-6 flex items-center justify-between container">
      <div class="w-32">
        <nuxt-link
          :to="localePath('/')"
          class="flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
        >
          <Logo class="w-full" :title="$t('navigation.logo.title')" />
        </nuxt-link>
      </div>

      <!-- burger -->
      <div class="relative z-30">
        <AppNavigationBurgerButton
          :label="$t('utilities.navigationMenu.label')"
          v-on:toogle="toogleNav"
          :isOpen="navOpen"
        />
      </div>
      <!-- mobile links -->
      <transition name="fade-from-left">
        <div ref="lang_menu" v-show="navOpen" class="fixed inset-0 h-full">
          <ul
            id="mobile-nav-menu"
            role="menubar"
            class="px-6 pt-7 pb-20 z-10 w-full h-full overflow-y-auto bg-surface-light dark:bg-surface-dark transition-colors duration-300 ease-linear"
          >
            <!-- logo -->
            <div class="w-32">
              <nuxt-link
                :to="localePath('/')"
                class="flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
              >
                <Logo class="w-full" :title="$t('navigation.logo.title')" />
              </nuxt-link>
            </div>
            <!-- links -->
            <li class="mt-10 font-bold text-sm opacity-80">
              {{ $t("navigation.linksText") }}
            </li>
            <div class="mt-4 space-y-4">
              <AppMobileNavigationLink :navigationLink="links[0]" />
              <AppMobileNavigationLink :navigationLink="links[1]" />
            </div>
            <!-- social links -->
            <li class="mt-10 font-bold text-sm opacity-80">
              {{ $t("navigation.socialText") }}
            </li>
            <li class="mt-4">
              <ul class="flex items-center space-x-4">
                <li>
                  <ContactItemButton
                    :contactItem="$t('contact.contactTelegram')"
                  >
                    <Telegram :title="$t('icons.Telegram.title')" />
                  </ContactItemButton>
                </li>
                <li>
                  <ContactItemButton
                    :contactItem="$t('contact.contactFacebook')"
                  >
                    <Facebook :title="$t('icons.Facebook.title')" />
                  </ContactItemButton>
                </li>
                <li>
                  <ContactItemButton
                    :contactItem="$t('contact.contactTwitter')"
                  >
                    <Twitter :title="$t('icons.Twitter.title')" />
                  </ContactItemButton>
                </li>
              </ul>
            </li>
            <!-- utilities -->
            <li class="mt-10 font-bold text-sm opacity-80">
              {{ $t("navigation.utilitiesText") }}
            </li>
            <li class="mt-4">
              <ul class="flex items-center space-x-4">
                <li class="w-10 h-10">
                  <ColorModeCtrl
                    aria-hidden="true"
                    :label="$t('utilities.colorCtrl.label')"
                    class="w-full h-full flex items-center justify-center"
                    svgClasses="w-6 h-6"
                  />
                </li>
                <li class="w-10 h-10">
                  <AppLangSwitcher
                    :label="$t('utilities.navigationMenu.label')"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import AppMobileNavigationLink from "@/components/app/AppMobileNavigationLink.vue";
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
import Logo from "@/components/icons/Logo.vue";
export default {
  components: {
    Logo,
    AppMobileNavigationLink,
    ColorModeCtrl,
    AppLangSwitcher,
    AppNavigationBurgerButton,
    ContactItemButton,
    Telegram,
    WhatsApp,
    Facebook,
    Twitter,
  },

  props: {
    links: {
      type: Array,
      default() {
        return [
          {
            path: "index",
            tooltipLocation: "navigation.home.tooltip",
            localePath: "/",
            bodyLocation: "navigation.home.body",
          },
        ];
      },
    },
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

