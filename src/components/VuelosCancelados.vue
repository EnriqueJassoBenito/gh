<template>
  <div>
    <h1>VUELOS CANCELADOS</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to= "{name: 'proximosvuelos'}">Siguiente</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          href: "#",
          to: { name: "proximosvuelos" },
        },
      ],
    };
  },
}
</script>

<style>

</style>