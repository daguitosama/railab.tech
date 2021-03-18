<template>
  <footer class="py-10 bg-gray-50 dark:bg-gray-800">
    <div class="container">
      <header class=" ">
        <p class="text-sm opacity-80">© 2021 Railab</p>
      </header>

      <div class="mt-6">
        <ul class="space-y-6 sm:space-y-0 sm:flex sm:space-x-10 md:space-x-16">
          <li>
            <ul class="mt-4 space-y-3 text-sm">
              <li>
                <p class="text-sm font-semibold opacity-80">
                  {{ $t("navigation.linksText") }}
                </p>
              </li>
              <AppFooterLink :footerLink="mobileLinks[0]" />
              <AppFooterLink :footerLink="mobileLinks[1]" />
              <AppFooterLink :footerLink="mobileLinks[2]" />
            </ul>
          </li>

          <li>
            <ul class="mt-4 space-y-3 text-sm">
              <li>
                <p class="text-sm font-semibold opacity-80">
                  {{ $t("navigation.socialText") }}
                </p>
              </li>

              <li>
                <AppFooterSocialItem
                  :footerSocialItem="$t('contact.contactTelegram')"
                >
                  <Telegram :title="$t('icons.Telegram.title')" class="h-4 w-4" />
                </AppFooterSocialItem>
              </li>

              <li>
                <AppFooterSocialItem
                  :footerSocialItem="$t('contact.contactWhatsApp')"
                >
                  <WhatsApp :title="$t('icons.WhatsApp.title')" class="h-4 w-4" />
                </AppFooterSocialItem>
              </li>

              <li>
                <AppFooterSocialItem
                  :footerSocialItem="$t('contact.contactFacebook')"
                >
                  <Facebook :title="$t('icons.Facebook.title')" class="h-4 w-4" />
                </AppFooterSocialItem>
              </li>

              <li>
                <AppFooterSocialItem
                  :footerSocialItem="$t('contact.contactTwitter')"
                >
                  <Twitter :title="$t('icons.Twitter.title')" class="h-4 w-4" />
                </AppFooterSocialItem>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import AppFooterLink from "@/components/app/AppFooterLink.vue";
import AppFooterSocialItem from "@/components/app/AppFooterSocialItem.vue";
import Telegram from "@/components/icons/Telegram.vue";
import WhatsApp from "@/components/icons/WhatsApp.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Twitter from "@/components/icons/Twitter.vue";

export default {
  components: {
    AppFooterLink,
    AppFooterSocialItem,
    Telegram,
    WhatsApp,
    Facebook,
    Twitter,
  },
  data() {
    return {
      mobileLinks: [
        {
          path: "index",
          tooltipLocation: "navigation.services.tooltip",
          localePath: "/",
          bodyLocation: "navigation.services.body",
        },
        {
          path: "contact",
          tooltipLocation: "navigation.contact.tooltip",
          localePath: "contact",
          bodyLocation: "navigation.contact.body",
        },
        {
          path: "about",
          tooltipLocation: "footer.about.tooltip",
          localePath: "about",
          bodyLocation: "footer.about.body",
        },
      ],
    };
  },
};
</script>

<style>
</style>