<template>
  <div >
    <div class="container">
    <SectionIntro />
    <ServiceItemList />
    <SectionTelegram />
    <SectionSello />
    </div>
    <ContactShorcut/>
  </div>
</template>

<script>
import SectionIntro from "@/components/services/SectionIntro.vue";
import ServiceItemList from "@/components/services/ServiceItemList.vue";
import SectionTelegram from "@/components/services/SectionTelegram.vue";
import SectionSello from "@/components/services/SectionSello.vue";
import ContactShorcut from "@/components/contact/ContactShorcut";

export default {
  components: {
    SectionIntro,
    ServiceItemList,
    SectionTelegram,
    SectionSello,
    ContactShorcut,
  },
};
</script>

