<template>
  <section class="mt-20">
    <AppHeading :sectionHeading="$t('contact.contactHeading')" class="text-center" />
    <div class="mt-10 flex flex-col items-center">
      <ul
        class="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <li class="">
          <ContactItem :contactItem="$t('contact.contactPhone')">
            <Phone :title="$t('icons.Phone.title')"/>
          </ContactItem>
        </li>

        <li>
          <ContactItem :contactItem="$t('contact.contactTelegram')">
            <Telegram :title="$t('icons.Telegram.title')" />
          </ContactItem>
        </li>

        <li>
          <ContactItem :contactItem="$t('contact.contactWhatsApp')">
            <WhatsApp :title="$t('icons.WhatsApp.title')" />
          </ContactItem>
        </li>

        <li>
          <ContactItem :contactItem="$t('contact.contactFacebook')">
            <Facebook :title="$t('icons.Facebook.title')"/>
          </ContactItem>
        </li>

        <li>
          <ContactItem :contactItem="$t('contact.contactTwitter')">
            <Twitter :title="$t('icons.Twitter.title')"/>
          </ContactItem>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppHeading from "@/components/app/AppHeading.vue";
import ContactItem from "@/components/contact/ContactItem.vue";
import Phone from "@/components/icons/Phone.vue";
import Telegram from "@/components/icons/Telegram.vue";
import WhatsApp from "@/components/icons/WhatsApp.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Twitter from "@/components/icons/Twitter.vue";
export default {
  components: {
    AppHeading,
    Phone,
    Telegram,
    WhatsApp,
    Facebook,
    Twitter,
    ContactItem,
  },
  // props: {
  //   contactHeading: {
  //     type: String,
  //     default: "Contáctenos",
  //   },
  //   contactPhone: {
  //     type: Object,
  //     default: () => ({
  //       body: "(+53) 5 413 21 20",
  //       tootlip: "Nuestro número de teléfono",
  //       link: "tel:5354132120",
  //     }),
  //   },
  //   contactTelegram: {
  //     type: Object,
  //     default: () => ({
  //       body: "Telegram",
  //       tootlip: "Enlace a nuestro grupo de Telegram",
  //       link: "https://t.me/RailabMac",
  //     }),
  //   },
  //   contactWhatsapp: {
  //     type: Object,
  //     default: () => ({
  //       body: "WhatsApp",
  //       tootlip: "Enlace a nuestro WhatsApp",
  //       link: "https://wa.me/+5354132120",
  //     }),
  //   },
  //   contactFacebook: {
  //     type: Object,
  //     default: () => ({
  //       body: "Facebook",
  //       tootlip: "Enlace a nuestro Facebook",
  //       link: "https://m.facebook.com/RaiLabMacbook",
  //     }),
  //   },
  //   contactTwitter: {
  //     type: Object,
  //     default: () => ({
  //       body: "Twitter",
  //       tootlip: "Enlace a nuestro Twitter",
  //       link: "https://twitter.com/RailabMac",
  //     }),
  //   },
  // },
  
};
</script>

<style>
</style>