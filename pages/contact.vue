<template>
  <div>
    <div class="container">
      <SectionContactItems />
      <ContactMap />
      <SectionContactForm class="py-32" />
    </div>
  </div>
</template>

<script>
import SectionContactItems from "@/components/contact/SectionContactItems.vue";
import ContactMap from "@/components/contact/ContactMap.vue";
import SectionContactForm from "@/components/contact/SectionContactForm.vue";

export default {
  components: {
    SectionContactItems,
    SectionContactForm,
    ContactMap,
  },
};
</script>

