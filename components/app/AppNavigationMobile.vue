<template>
    <div class="lg:hidden">
        <!-- mobile -->
        <nav class="py-4 flex items-center justify-between container">
            <div class="">
                <nuxt-link
                    :to="localePath('/')"
                    class="h-6 flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
                >
                    <Logo
                        class="w-full h-8"
                        :title="$t('navigation.logo.title')"
                    />
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
                <div
                    ref="lang_menu"
                    v-show="navOpen"
                    class="fixed inset-0 h-full"
                >
                    <ul
                        id="mobile-nav-menu"
                        role="menubar"
                        class="px-6 pt-5 pb-12 z-10 w-full h-full overflow-y-auto bg-surface-light dark:bg-surface-dark transition-colors duration-300 ease-linear"
                    >
                        <!-- logo -->
                        <div class="w-32">
                            <nuxt-link
                                :to="localePath('/')"
                                class="h-6 flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
                            >
                                <Logo class="w-full h-8" />
                            </nuxt-link>
                        </div>
                        <!-- links -->
                        <li class="mt-10 font-bold text-sm opacity-80">
                            {{ $t("navigation.linksText") }}
                        </li>
                        <div class="mt-4 space-y-4">
                            <AppMobileNavigationLink
                                :navigationLink="links[0]"
                            />
                            <AppMobileNavigationLink
                                :navigationLink="links[1]"
                            />
                        </div>
                        <!-- social links -->
                        <li class="mt-10 font-bold text-sm opacity-80">
                            {{ $t("navigation.socialText") }}
                        </li>
                        <li class="mt-4">
                            <ul class="space-y-2">
                                <li>
                                    <ContactItemButton
                                        :contactItem="
                                            communityItems.telegramLink
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-3"
                                        >
                                            <Telegram class="w-5 h-5" />
                                            <span>Telegram</span>
                                        </div>
                                    </ContactItemButton>
                                </li>
                                <li>
                                    <ContactItemButton
                                        :contactItem="
                                            communityItems.facebookLink
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-3"
                                        >
                                            <Facebook class="w-5 h-5" />
                                            <span>Facebook</span>
                                        </div>
                                    </ContactItemButton>
                                </li>
                                <li>
                                    <ContactItemButton
                                        :contactItem="
                                            communityItems.twitterLink
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-3"
                                        >
                                            <Twitter class="w-5 h-5" />
                                            <span>Twitter</span>
                                        </div>
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
                                        svgClasses="w-5 h-5"
                                    />
                                </li>
                                <li class="w-10 h-10">
                                    <AppLangSwitcher
                                        :label="
                                            $t('utilities.navigationMenu.label')
                                        "
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
                    document.body.classList.add(
                        "overflow-hidden",
                        "absolute",
                        "inset-0"
                    );
                } else {
                    document.body.classList.remove(
                        "overflow-hidden",
                        "absolute",
                        "inset-0"
                    );
                }
            }
        }

        const footerCommunityItems = {
            en: {
                telegramLink: {
                    body: "Telegram",
                    tooltip: "Our Telegram group",
                    link: "https://t.me/RailabMac",
                },
                facebookLink: {
                    body: "Facebook",
                    tootlip: "Our Facebook page",
                    link: "https://m.facebook.com/RaiLabMacBook",
                },
                twitterLink: {
                    body: "Twitter",
                    tooltip: "Our Twitter account",
                    link: "https://twitter.com/RailabMac",
                },
            },
            es: {
                telegramLink: {
                    body: "Telegram",
                    tooltip: "Enlace a nuestro grupo de Telegram",
                    link: "https://t.me/RailabMac",
                },
                facebookLink: {
                    body: "Facebook",
                    tooltip: "Enlace a nuestro Facebook",
                    link: "https://m.facebook.com/RaiLabMacBook",
                },
                twitterLink: {
                    body: "Twitter",
                    tooltip: "Enlace a nuestro Twitter",
                    link: "https://twitter.com/RailabMac",
                },
            },
        };

        const { locale } = useI18n();
        const communityItems = computed(
            () => footerCommunityItems[locale.value]
        );

        return {
            // refs
            lang_menu,
            // state
            navOpen,
            // function
            toogleNav,
            communityItems,
        };
    },
};
</script>
