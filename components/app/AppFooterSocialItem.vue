<template>
  <a
    target="_blank"
    rel="noopener"
    :href="footerSocialItem.link"
    :title="footerSocialItem.tooltip"
    class="rounded-lg opacity-80 hover:opacity-100 px-2 relative -left-2 flex focus:outline-none focus-visible:ring focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
  >
    <slot></slot>
    <p class="ml-2">
      {{ footerSocialItem.body }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    footerSocialItem: {
      type: Object,
      default: () => ({
        link: "#",
        tooltip: "#",
        body: "#",
      }),
    },
  },
};
</script>

<style>
</style>