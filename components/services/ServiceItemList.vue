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
            :serviceItem="$t('services.list.items')[0]"
            :iconColors="'from-teal-400 to-cyan-800'"
          >
            <Cog
              class="text-white w-8 h-8"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[1]"
            :iconColors="'from-cyan-400 to-blue-800'"
          >
            <Refresh
              class="text-white w-8 h-8"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem
            :serviceItem="$t('services.list.items')[2]"
            :iconColors="'from-purple-400 to-indigo-800'"
          >
            <Eye
              class="text-white w-8 h-8"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem
            :serviceItem="$t('services.list.items')[3]"
            :iconColors="'from-pink-400 to-red-800'"
          >
            <TrendingUp
              class="text-white w-7 h-7"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem
            :serviceItem="$t('services.list.items')[4]"
            :iconColors="'from-indigo-400 to-fuchsia-800'"
          >
            <Badge
              class="text-white w-8 h-8"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[5]"
            :iconColors="'from-yellow-400 to-violet-800'"
          >
            <CloudDown
              class="text-white w-7 h-7"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[6]"
            :iconColors="'from-lime-400 to-emerald-800'"
          >
            <Cash
              class="text-white w-8 h-8"
              :title="$t('services.list.items')[6].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[7]"
            :iconColors="'from-rose-500 to-orange-800'"
          >
            <Library
              class="text-white w-8 h-8"
              :title="$t('services.list.items')[7].iconTitle"
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
import Cash from '@/components/icons/Cash.vue';
import Cog from '@/components/icons/Cog.vue';
import Refresh from '@/components/icons/Refresh.vue';
import TrendingUp from '@/components/icons/TrendingUp.vue';
import Badge from '@/components/icons/Badge.vue';
import CloudDown from '@/components/icons/CloudDown.vue';
import Library from '@/components/icons/Library.vue';
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
    Library
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
            "Macbook con líquido derramado",
            "Teclado o trackpad sin funcionar",
            "Macbook o iMac sin encender",
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
          title: "Defectación Gratuita",
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
};
</script>

<style>
</style>