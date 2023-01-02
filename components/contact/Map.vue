<template>
    <div class="rounded-lg overflow-hidden" ref="mapConatiner">
        <iframe
            v-if="mapNeeded"
            :src="mapSrc"
            :title="$t('contact.mapTitle')"
            frameborder="0"
            style="border: 0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            lazyload
            loading="lazy"
            class="absolute rounded-lg w-full h-full bg-primary-light"
        ></iframe>
    </div>
</template>

<script>
import { useElementVisibility } from "@vueuse/core";
export default {
    props: {
        mapSrc: {
            type: String,
            default:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.4571127250474!2d-82.37762357080975!3d23.10337489905703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7987a6a337dd%3A0x28490f5aec905f2c!2sRailab%20Mac!5e0!3m2!1sen!2scu!4v1615498403360!5m2!1sen!2scu",
        },
        mapTitle: {
            type: String,
            default: "",
        },
    },
    setup() {
        const mapConatiner = ref(null);
        const state = reactive({
            mapConatinerViewed: useElementVisibility(mapConatiner),
            mapNeeded: false,
        });

        watch(
            () => state.mapConatinerViewed,
            (a, b) => {
                if (!state.mapNeeded) {
                    state.mapNeeded = true;
                }
            }
        );

        return {
            mapConatiner,
            ...toRefs(state),
        };
    },
};
</script>
