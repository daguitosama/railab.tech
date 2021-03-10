<template>
  <section class="mt-20 lg:mt-40">
    <AppHeading :sectionHeading="contactHeading" class="text-center" />
    <div class="mt-10 flex flex-col items-center">
      <ul
        class="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <li class="">
          <a
            :href="'tel:' + contactPhone"
            :title="contactPhone.tooltip"
            class="shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-2xl py-4 px-16 flex justify-center items-center"
          >
            <Phone />
            <p class="ml-2">
              {{ contactPhoneFormated }}
            </p>
          </a>
        </li>

        <li>
          <a
            :href="contactTelegram.link"
            :title="contactTelegram.tooltip"
            class="shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-2xl py-4 px-16 flex justify-center items-center"
          >
            <Telegram />
            <p
              :href="contactTelegram.link"
              :title="contactTelegram.tooltip"
              class="ml-2"
            >
              {{ contactTelegram.body }}
            </p>
          </a>
        </li>

        <li>
          <a
            :href="contactWhatsapp.link"
            :title="contactWhatsapp.tooltip"
            class="shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-2xl py-4 px-16 flex justify-center items-center"
          >
            <WhatsApp />
            <p class="ml-2">{{ contactWhatsapp.body }}</p>
          </a>
        </li>

        <li>
          <a
            :href="contactFacebook.link"
            :title="contactFacebook.tooltip"
            class="shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-2xl py-4 px-16  flex justify-center items-center"
          >
            <Facebook/>
            <p class="ml-2" >{{ contactFacebook.body }}</p>
          </a>
        </li>

        <li>
          <a
            :href="contactTwitter.link"
            :title="contactTwitter.tooltip"
            class="shadow bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 rounded-2xl py-4 px-16 flex justify-center items-center"
          >
            <Twitter />
            <p class="ml-2" >{{ contactTwitter.body }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppHeading from "@/components/app/AppHeading.vue";
import Phone from "@/components/icons/Phone.vue";
import Telegram from "@/components/icons/Telegram.vue";
import WhatsApp from "@/components/icons/WhatsApp.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Twitter from "@/components/icons/Twitter.vue";
export default {
  components: { AppHeading, Phone, Telegram, WhatsApp, Facebook, Twitter },
  props: {
    contactHeading: {
      type: String,
      default: "Contáctenos",
    },
    contactPhone: {
      type: String,
      default: "5354132120",
    },
    contactTelegram: {
      type: Object,
      default: () => ({
        body: "Telegram",
        tootlip: "Enlace a nuestro grupo de Telegram",
        link: "https://t.me/RailabMac",
      }),
    },
    contactWhatsapp: {
      type: Object,
      default: () => ({
        body: "WhatsApp",
        tootlip: "Enlace a nuestro WhatsApp",
        link: "https://wa.me/+5354132120",
      }),
    },
    contactFacebook: {
      type: Object,
      default: () => ({
        body: "Facebook",
        tootlip: "Enlace a nuestro Facebook",
        link: "https://m.facebook.com/RaiLabMacbook",
      }),
    },
    contactTwitter: {
      type: Object,
      default: () => ({
        body: "Twitter",
        tootlip: "Enlace a nuestro Twitter",
        link: "https://twitter.com/RailabMac",
      }),
    },
  },
  computed: {
    contactPhoneFormated() {
      let result = ["(", "+"];
      this.contactPhone
        .split("")
        .forEach(function formatPhoneNumber(digit, index) {
          if (index == 1) {
            result.push(digit);
            result.push(")");
            result.push(" ");
            return;
          }
          if (index == 2 || index == 5 || index == 7) {
            result.push(digit);
            result.push(" ");
            return;
          }
          result.push(digit);
        });
      return result.join("");
    },
  },
};
</script>

<style>
</style>