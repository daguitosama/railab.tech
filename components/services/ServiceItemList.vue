<template>
    <section class="">
        <AppHeading
            class="max-w-md pt-32"
            :sectionHeading="$t('services.list.heading')"
            :sectionHeadingId="'services-listings'"
        />

        <div class="mt-14 md:mt-20">
            <ul
                class="space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-9 md:gap-y-14 lg:grid-cols-3"
            >
                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[0]"
                        :iconColors="'from-teal-400 to-cyan-800'"
                    >
                        <Cog
                            class="text-white w-8 h-8"
                            :title="serviceItems[0].iconTitle"
                        />
                    </ServiceItem>
                </li>

                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[1]"
                        :iconColors="'from-cyan-400 to-blue-800'"
                    >
                        <Refresh
                            class="text-white w-8 h-8"
                            :title="serviceItems[1].iconTitle"
                        />
                    </ServiceItem>
                </li>

                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[2]"
                        :iconColors="'from-purple-400 to-indigo-800'"
                    >
                        <Eye
                            class="text-white w-8 h-8"
                            :title="serviceItems[2].iconTitle"
                        />
                    </ServiceItem>
                </li>

                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[3]"
                        :iconColors="'from-pink-400 to-red-800'"
                    >
                        <TrendingUp
                            class="text-white w-7 h-7"
                            :title="serviceItems[3].iconTitle"
                            3
                        />
                    </ServiceItem>
                </li>

                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[4]"
                        :iconColors="'from-indigo-400 to-fuchsia-800'"
                    >
                        <Badge
                            class="text-white w-8 h-8"
                            :title="serviceItems[4].iconTitle"
                        />
                    </ServiceItem>
                </li>

                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[5]"
                        :iconColors="'from-teal-400 to-violet-800'"
                    >
                        <CloudDown
                            class="text-white w-7 h-7"
                            :title="serviceItems[5].iconTitle"
                        />
                    </ServiceItem>
                </li>

                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[6]"
                        :iconColors="'from-lime-400 to-emerald-800'"
                    >
                        <Cash
                            class="text-white w-8 h-8"
                            :title="serviceItems[6].iconTitle"
                        />
                    </ServiceItem>
                </li>

                <li>
                    <ServiceItem
                        :serviceItem="serviceItems[7]"
                        :iconColors="'from-rose-500 to-orange-800'"
                    >
                        <Library
                            class="text-white w-8 h-8"
                            :title="serviceItems[7].iconTitle"
                        />
                    </ServiceItem>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import Eye from "@/components/icons/Eye.vue";
import AppHeading from "@/components/app/AppHeading.vue";
import ServiceItem from "@/components/services/ServiceItem.vue";
import Cash from "@/components/icons/Cash.vue";
import Cog from "@/components/icons/Cog.vue";
import Refresh from "@/components/icons/Refresh.vue";
import TrendingUp from "@/components/icons/TrendingUp.vue";
import Badge from "@/components/icons/Badge.vue";
import CloudDown from "@/components/icons/CloudDown.vue";
import Library from "@/components/icons/Library.vue";
export default {
    components: {
        Eye,
        AppHeading,
        ServiceItem,
        Cash,
        Cog,
        Refresh,
        TrendingUp,
        Badge,
        CloudDown,
        Library,
    },
    props: {
        sectionHeading: {
            type: String,
            default: "Los Servicios que está buscando",
        },
        sectionHadingId: {
            type: String,
            default: null,
        },
        serviceItems: {
            type: Array,
            default: () => [
                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Reparación",
                    textContent: null,
                    listContent: [
                        "MacBook con líquido derramado",
                        "Teclado o trackpad sin funcionar",
                        "MacBook o iMac sin encender",
                        "Pantalla dañada",
                        "Problemas con Wifi y Bluetooth",
                        "Cargador dañado",
                    ],
                },

                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Mantenimiento",
                    textContent: null,
                    listContent: [
                        "Limpieza del equipo",
                        "Cambio de pasta térmica",
                        "Eliminación de humedad y corrosión",
                    ],
                },

                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Diagnóstico gratuito",
                    textContent: `Ud. no necesita abonar dinero alguno. Desarmamos su equipo y le comunicamos las posibles causas de la rotura. 
          Tendrá un estimado del precio de la reparación.`,
                    listContent: null,
                },

                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Upgrade",
                    textContent: null,
                    listContent: [
                        "Cambiamos y mejoramos componentes clave para el rendimiento de su equipo (RAM, Disco Duro)",
                        "Instalación de disco de estado sólido o Fusion Drive en iMac",
                    ],
                },

                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Garantía",
                    textContent: `En Railab ud. tendrá un mes mínimo de garantía. Trabajamos para ofrecerle la tranquilidad de que el equipo no regresará al taller.`,
                    listContent: null,
                },

                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Software",
                    textContent: null,
                    listContent: [
                        "Instalación de sistemas operativos macOs y aplicaciones",
                        "Instalación de Windows en Mac",
                    ],
                },

                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Gane dinero con Railab",
                    textContent: `Compramos Mac rotas para obtener componentes y partes necesarias para nuestro trabajo. 
          Ud. obtiene dinero por un equipo en desuso y nosotros aseguramos que haya un Mac menos en algún basurero del país.`,
                    listContent: null,
                },

                {
                    iconColors: "from-cyan-400 to-cyan-800",
                    iconTitle: "Eye",
                    title: "Contrato con entidades estatales",
                    textContent: `Operamos bajo licencia y solo para el caso de entidades estatales y embajadas, trabajamos ordenadores de otras marcas que no sea Apple. 
          Si está interesado, contrate nuestros servicios.`,
                    listContent: null,
                },
            ],
        },
    },

    setup() {
        const items = {
            en: [
                {
                    iconTitle: "Eye",
                    title: "Repair",
                    textContent: null,
                    listContent: [
                        "Spilled liquid on MacBook",
                        "Not working keyboard or trackpad",
                        "Non starting MacBook or iMac ",
                        "Screen damage",
                        "Wifi and Bluetooth problems",
                        "Damaged charger",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Maintenance",
                    textContent: null,
                    listContent: [
                        "Equipment cleaning",
                        "Thermal paste change",
                        "Removal of moisture and corrosion",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Free Troubleshooting",
                    textContent:
                        "You don't need to pay anything for Troubleshooting. We disassemble your machine and then we tell you the posible origin of the problem. You will have an estimate for the repair. ",
                    listContent: null,
                },
                {
                    iconTitle: "Eye",
                    title: "Upgrade",
                    textContent: null,
                    listContent: [
                        "We change and upgrade key components for performance of your Mac (RAM, Hard Drive)",
                        "We also install SSD drives or o Fusion Drive on the iMac",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Warranty",
                    textContent:
                        "In Railab you will have a hole month at least of Warranty. We work for offer you the tranquillity  of your Mac is not going back to the workshop.",
                    listContent: null,
                },
                {
                    iconTitle: "Eye",
                    title: "Software",
                    textContent: null,
                    listContent: [
                        "We install macOs and apps",
                        "We also install Windows on the Mac",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Make money with Railab",
                    textContent:
                        "We buy broken  Macs to obtain  components and parts we need to do our job. You make some money for your unused Mac and we ensure one less machine on the trash.",
                    listContent: null,
                },
                {
                    iconTitle: "Eye",
                    title: "Contract with State Companies",
                    textContent:
                        "We operate under license and just in case of a State Company or an Embassy, we work with non Apple devices.",
                    listContent: null,
                },
            ],
            es: [
                {
                    iconTitle: "Eye",
                    title: "Reparación",
                    textContent: null,
                    listContent: [
                        "MacBook con líquido derramado",
                        "Teclado o trackpad sin funcionar",
                        "MacBook o iMac sin encender",
                        "Pantalla dañada",
                        "Problemas con Wifi y Bluetooth",
                        "Cargador dañado",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Mantenimiento",
                    textContent: null,
                    listContent: [
                        "Limpieza del equipo",
                        "Cambio de pasta térmica",
                        "Eliminación de humedad y corrosión",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Diagnóstico gratuito",
                    textContent:
                        "Ud. no necesita abonar dinero alguno. Desarmamos su equipo y le comunicamos las posibles causas de la rotura.                   Tendrá un estimado del precio de la reparación.",
                    listContent: null,
                },
                {
                    iconTitle: "Eye",
                    title: "Upgrade",
                    textContent: null,
                    listContent: [
                        "Cambiamos y mejoramos componentes clave para el rendimiento de su equipo (RAM, Disco Duro)",
                        "Instalación de disco de estado sólido o Fusion Drive en iMac",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Garantía",
                    textContent:
                        "En Railab ud. tendrá un mes mínimo de garantía. Trabajamos para ofrecerle la tranquilidad de que el equipo no regresará al taller.",
                    listContent: null,
                },
                {
                    iconTitle: "Eye",
                    title: "Software",
                    textContent: null,
                    listContent: [
                        "Instalación de sistemas operativos macOs y aplicaciones",
                        "Instalación de Windows en Mac",
                    ],
                },
                {
                    iconTitle: "Eye",
                    title: "Gane dinero con Railab",
                    textContent:
                        "Compramos Mac rotas para obtener componentes y partes necesarias para nuestro trabajo. Ud. obtiene dinero por un equipo en desuso y nosotros aseguramos que haya un Mac menos en algún basurero del país.",
                    listContent: null,
                },
                {
                    iconTitle: "Eye",
                    title: "Contrato con entidades estatales",
                    textContent:
                        "Operamos bajo licencia y solo para el caso de entidades estatales y embajadas, trabajamos ordenadores de otras marcas que no sea Apple. Si está interesado, contrate nuestros servicios.",
                    listContent: null,
                },
            ],
        };

        const { locale } = useI18n();
        const serviceItems = computed(() => items[locale.value]);

        return { serviceItems };
    },
};
</script>

<style></style>
