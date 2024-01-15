<template>
  <div>
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
    };
  },
}
</script>

<style>

</style>