<template>
  <div class="container">
    <ServiceItemList />
  </div>
</template>

<script>
import SectionIntro from "@/components/services/SectionIntro.vue";
import ServiceItem from "@/components/services/ServiceItem.vue";
import ServiceItemList from "@/components/services/ServiceItemList.vue";
export default {
  components: {
    SectionIntro,
    ServiceItem,
    ServiceItemList
  },
};
</script>

