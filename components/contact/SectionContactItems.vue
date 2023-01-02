<template>
    <section class="mt-10">
        <AppHeading
            :sectionHeading="$t('contact.contactHeading')"
            class="text-center"
        />
        <div class="mt-10 flex flex-col items-center">
            <ul
                class="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <li class="">
                    <ContactItem :contactItem="contactItems.contactPhone">
                        <Phone />
                    </ContactItem>
                </li>

                <li>
                    <ContactItem
                        :contactItem="contactItems.contactPersonalTelegram"
                    >
                        <Telegram />
                    </ContactItem>
                </li>

                <li>
                    <ContactItem :contactItem="contactItems.contactWhatsApp">
                        <WhatsApp />
                    </ContactItem>
                </li>

                <li>
                    <ContactItem :contactItem="contactItems.contactFacebook">
                        <Facebook />
                    </ContactItem>
                </li>

                <li>
                    <ContactItem :contactItem="contactItems.contactTwitter">
                        <Twitter />
                    </ContactItem>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import AppHeading from "@/components/app/AppHeading.vue";
import ContactItem from "@/components/contact/ContactItem.vue";
import Phone from "@/components/icons/Phone.vue";
import Telegram from "@/components/icons/Telegram.vue";
import WhatsApp from "@/components/icons/WhatsApp.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Twitter from "@/components/icons/Twitter.vue";

const { t, locale } = useI18n();

const items = {
    en: {
        contactPhone: {
            body: "(+53) 5 413 21 20",
            tooltip: "Our phone number",
            link: "tel:5354132120",
        },
        contactPersonalTelegram: {
            body: "Telegram",
            tooltip: "Our Telegram account",
            link: "https://t.me/RaikMac",
        },
        contactTelegram: {
            body: "Telegram",
            tooltip: "Our Telegram group",
            link: "https://t.me/RailabMac",
        },
        contactWhatsApp: {
            body: "WhatsApp",
            tooltip: "Our WhatsApp account",
            link: "https://wa.me/+5354132120",
        },
        contactFacebook: {
            body: "Facebook",
            tooltip: "Our Facebook page",
            link: "https://m.facebook.com/RaiLabMacBook",
        },
        contactTwitter: {
            body: "Twitter",
            tooltip: "Our Twitter account",
            link: "https://twitter.com/RailabMac",
        },
    },
    es: {
        contactPhone: {
            body: "(+53) 5 413 21 20",
            tooltip: "Nuestro número de teléfono",
            link: "tel:5354132120",
        },
        contactPersonalTelegram: {
            body: "Telegram",
            tooltip: "Nuestra cuenta personal de Telegram",
            link: "https://t.me/RaikMac",
        },
        contactTelegram: {
            body: "Telegram",
            tooltip: "Enlace a nuestro grupo de Telegram",
            link: "https://t.me/RailabMac",
        },
        contactWhatsApp: {
            body: "WhatsApp",
            tooltip: "Enlace a nuestro WhatsApp",
            link: "https://wa.me/+5354132120",
        },
        contactFacebook: {
            body: "Facebook",
            tooltip: "Enlace a nuestro Facebook",
            link: "https://m.facebook.com/RaiLabMacBook",
        },
        contactTwitter: {
            body: "Twitter",
            tooltip: "Enlace a nuestro Twitter",
            link: "https://twitter.com/RailabMac",
        },
    },
};

const contactItems = computed(() => items[locale.value]);
</script>
