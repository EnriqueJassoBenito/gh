<template>
  <div>
    <b-breadcrumb class="mt-2" :items="items1"></b-breadcrumb>
    <h1>RESERVAS DE VUELOS</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to= "{name: 'asientosreservados'}">Siguiente</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          href: "#",
          to: { name: "asientosreservados" },
        },
      ],
      items1: [
        {
          text: "Reservas de Vuelo",
          to: { name: "reservasvuelo" },
        },
        {
          text: "Vuelos Disponibles",
          to: { name: "vuelosdisponibles" },
        },
        {
          text: "Vuelos Cancelados",
          to: { name: "vueloscancelados" },
        },
        {
          active: true,
        },
      ],
    };
  },
}
</script>

<style>

</style>