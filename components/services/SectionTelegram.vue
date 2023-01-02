<template>
    <section class="min-h-84 py-12 flex items-center justify-center">
        <div class="w-full">
            <AppHeading
                class="max-w-md"
                :sectionHeading="$t('services.techAdvise.heading')"
            />
            <div class="flex">
                <!-- text -->
                <div class="w-full md:w-1/2">
                    <!-- telegram icon TODO -->
                    <div class="mt-12">
                        <div
                            class="w-16 h-16 rounded-2xl shadow-md bg-gradient-to-br flex items-center justify-center from-blue-400 to-blue-800"
                        >
                            <Plane
                                title="Plane"
                                class="text-white fill-current transform rotate-45 ml-2 mb-1"
                            />
                        </div>
                        <div class="mt-3">
                            <a
                                :href="$t('services.techAdvise.cta.link')"
                                :title="$t('services.techAdvise.cta.tooltip')"
                                class="text-lg opacity-70 hover:opacity-100 transition-opacity duration-150 font-semibold focusable-on-visible"
                                >{{ $t("services.techAdvise.cta.body") }}</a
                            >
                        </div>
                    </div>

                    <!-- copy -->
                    <div class="mt-10">
                        <p class="opacity-75 max-w-md">
                            {{ $t("services.techAdvise.description") }}
                        </p>
                    </div>
                </div>
                <!-- scene -->
                <div class="hidden md:block h-full w-5/12 my-auto mx-auto">
                    <!-- <ScenePeps /> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Plane from "@/components/icons/Plane.vue";
import AppHeading from "@/components/app/AppHeading.vue";

export default {
    components: {
        Plane,
        AppHeading,
    },
    props: {
        sectionHeading: {
            type: String,
            default: "",
        },
        groupLink: {
            type: Object,
            default: () => ({
                link: "#",
                body: "",
                tooltip: "",
            }),
        },
        description: {
            type: String,
            default: ``,
        },
    },
};
</script>

<style></style>
