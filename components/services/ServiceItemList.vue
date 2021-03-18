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
          <ServiceItem :serviceItem="$t('services.list.items')[0]">
            <Eye
              class="text-white fill-current"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[1]">
            <Eye
              class="text-white fill-current"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[2]">
            <Eye
              class="text-white fill-current"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[3]">
            <Eye
              class="text-white fill-current"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[4]">
            <Eye
              class="text-white fill-current"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[5]">
            <Eye
              class="text-white fill-current"
              :title="$t('services.list.items')[0].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[6]">
            <Eye
              class="text-white fill-current"
              :title="$t('services.list.items')[6].iconTitle"
            />
          </ServiceItem>
        </li>

        <li>
          <ServiceItem :serviceItem="$t('services.list.items')[7]">
            <Eye
              class="text-white fill-current"
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
export default {
  components: {
    Eye,
    AppHeading,
    ServiceItem,
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