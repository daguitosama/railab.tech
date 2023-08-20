<template>
    <footer class="mt-20 bg-gray-200 dark:bg-gray-800 relative">
        <div></div>
        <FooterCurve />
        <div class="container pb-20 pt-20">
            <div class="mt-6 text-center sm:text-left flex justify-center">
                <ul
                    class="space-y-10 sm:space-y-0 sm:flex sm:space-x-20 md:space-x-16"
                >
                    <li>
                        <ul class="mt-4 space-y-3 text-sm">
                            <li>
                                <p class="text-sm font-extrabold opacity-80">
                                    {{ $t("navigation.linksText") }}
                                </p>
                            </li>
                            <AppFooterLink :footerLink="navigationLinks[0]" />
                            <AppFooterLink :footerLink="navigationLinks[1]" />
                            <AppFooterLink :footerLink="navigationLinks[2]" />
                        </ul>
                    </li>

                    <li>
                        <ul class="mt-4 space-y-3 text-sm">
                            <li>
                                <p class="text-sm font-extrabold opacity-80">
                                    {{ $t("footer.comunity.title") }}
                                </p>
                            </li>

                            <li>
                                <AppFooterSocialItem
                                    :footerSocialItem="
                                        communityItems.telegramLink
                                    "
                                >
                                    <Telegram
                                        :title="$t('icons.Telegram.title')"
                                        class="h-4 w-4"
                                    />
                                </AppFooterSocialItem>
                            </li>

                            <li>
                                <AppFooterSocialItem
                                    :footerSocialItem="
                                        communityItems.facebookLink
                                    "
                                >
                                    <Facebook
                                        :title="$t('icons.Facebook.title')"
                                        class="h-4 w-4"
                                    />
                                </AppFooterSocialItem>
                            </li>

                            <li>
                                <AppFooterSocialItem
                                    :footerSocialItem="
                                        communityItems.twitterLink
                                    "
                                >
                                    <Twitter
                                        :title="$t('icons.Twitter.title')"
                                        class="h-4 w-4"
                                    />
                                </AppFooterSocialItem>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-12 text-center">
                <p class="text-sm opacity-80">© 2021 Railab</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import AppFooterLink from "@/components/app/AppFooterLink.vue";
import AppFooterSocialItem from "@/components/app/AppFooterSocialItem.vue";
import Telegram from "@/components/icons/Telegram.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Twitter from "@/components/icons/Twitter.vue";
import FooterCurve from "@/components/illustations/FooterCurve.vue";
import ContactShortcut from "../contact/ContactShortcut.vue";
import { navigationLinks } from "@/data/data.js";

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
const communityItems = computed(() => footerCommunityItems[locale.value]);
</script>

<style></style>
