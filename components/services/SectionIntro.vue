<template>
  <section class="md:flex mt-28 lg:mt-48">
    <div class="md:w-1/2 mt-10">
      <div>
        <h1
          class="dark:text-onDark font-black text-6xl text-center md:text-left"
        >
          {{ $t("services.intro.heading") }}
        </h1>
        <p class="mt-6 text-center md:text-left text-lg font-semibold">
          {{ $t("services.intro.subHeading") }}
        </p>
      </div>

      <div class="mt-10">
        <div class="flex">
          <nuxt-link
            class="block mx-auto md:mx-0 text-lg py-3 px-10 rounded-2xl shadow transition-colors duration-150 text-white bg-primary-light hover:bg-primary-light-hover dark:bg-primary-dark dark:hover:bg-primary-dark-hover focus:outline-none focus-visible:ring focus-visible:ring-primary-light focus-visible:ring-primary-light-hover dark:focus-visible:ring-primary-dark-hover"
            :to="localePath($t('services.intro.cta.pageName'))"
            :title="$t('services.intro.cta.tooltip')"
          >
            {{ $t("services.intro.cta.body") }}
          </nuxt-link>
        </div>
        <div class=" mt-5 flex md:block">
          <a
            class=" text-lg  mx-auto opacity-75 hover:opacity-100  transition-opacity duration-150"
            :href="'#'+$t('services.intro.secondaryLink.innerLinkId')"
            :title="$t('services.intro.secondaryLink.tooltip')"
          >
            {{ $t("services.intro.secondaryLink.body") }}
          </a>
        </div>
      </div>
    </div>
    <div class="hidden md:flex w-2/4">
      <div class="pb-2/3 relative w-full">
        <img
          src="/img/macbook-air-black.png"
          :alt="$t('services.intro.picture.alt')"
          class="absolute top-10 object-cover w-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>