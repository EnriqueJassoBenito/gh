<template>
  <div>
    <h1>AQUI ES PARA ASIENTOS RESERVADOS</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to= "{name: 'reservasvuelo'}">Atras</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          href: "#",
          to: { name: "reservasvuelo" },
        },
      ],
    };
  },
}
</script>

<style>

</style>