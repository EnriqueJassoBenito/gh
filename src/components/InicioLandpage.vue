<template>
  <div class="mt-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>
        AQUI VA EL INICIO LANDPAGE
    </h1>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Reservas de Vuelo',
            to: { name: "reservasvuelo" },
          },
          {
            text: 'Vuelos Disponibles',
            to: { name: "vuelosdisponibles" },
          },
          {
            text: 'Vuelos Cancelados',
            to: { name: "vueloscancelados" },
          },
          {
            active: true
          }
        ]
      }
    }
}
</script>

<style>

</style>