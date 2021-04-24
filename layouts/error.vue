<template>
  <div class="container pb-24">
    <div v-if="error.statusCode !== 404">
      <h1>An error occurred</h1>
    </div>
    <div v-else class="min-h-screen">
      <div class="mt-32  w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1074.392 584.231"
          class="max-h-84 w-full"
        >
          <use href="/img/undraw_page_not_found.svg#undraw_page_not_found" />
        </svg>
      </div>
      <div class="mt-10  text-center">
        <h1 class="font-extrabold text-4xl sm:text-5xl">
          {{ $t("404.heading") }}
        </h1>
        <div class="mt-6 flex justify-center">
        <NuxtLink
          :to="localePath('/')"
          class=" transition-all duration-150 opacity-80 hover:opacity-100 text-white bg-gradient-to-tr from-fuchsia-700  to-indigo-800 py-2 px-4 rounded-xl shadow-lg"
          >{{ $t("404.linkText") }} →
        </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error-layout", // you can set a custom layout for the error page
};
</script>