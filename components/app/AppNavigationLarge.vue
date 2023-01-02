<template>
    <div class="hidden lg:block">
        <nav class="py-4 flex items-center justify-between container relative">
            <div class="w-32">
                <nuxt-link
                    :to="localePath('/')"
                    class="h-6 flex items-baseline focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark rounded-lg"
                >
                    <Logo class="h-full" />
                </nuxt-link>
            </div>

            <!-- desktop links -->
            <ul class="hidden md:flex space-x-8">
                <li class="">
                    <AppNavigationLargeLink :navigationLink="links[0]" />
                </li>

                <li>
                    <AppNavigationLargeLink :navigationLink="links[1]" />
                </li>
            </ul>
            <!-- desktop utilities -->
            <div class="hidden md:flex space-x-2">
                <ColorModeCtrl
                    :label="$t('utilities.colorCtrl.label')"
                    aria-hidden="true"
                />
                <div class="w-8 h-8">
                    <AppLangSwitcher
                        :label="$t('utilities.navigationMenu.label')"
                    />
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import AppNavigationLargeLink from "@/components/app/AppNavigationLargeLink.vue";
import ColorModeCtrl from "@/components/app/ColorModeCtrl.vue";
import AppLangSwitcher from "@/components/app/AppLangSwitcher.vue";
import Logo from "@/components/icons/Logo.vue";
export default {
    components: {
        AppNavigationLargeLink,
        ColorModeCtrl,
        AppLangSwitcher,
        Logo,
    },

    props: {
        links: {
            type: Array,
            default() {
                return [
                    {
                        path: "index",
                        tooltipLocation: "navigation.home.tooltip",
                        localePath: "/",
                        bodyLocation: "navigation.home.body",
                    },
                ];
            },
        },
    },

    methods: {
        isOnPath(path /* string */) {
            return this.$route?.name?.startsWith(path);
        },
    },
};
</script>
