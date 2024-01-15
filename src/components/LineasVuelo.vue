<template>
  <div>
    <h1>AQUI ES LINEAS DE VUELO</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to= "{name: 'vuelosdisponibles'}">Atras</b-link>
  </div>
</template>

<script>
export default {
    data() {
    return {
      items: [
        {
          href: "#",
          to: { name: "lineasdevuelo" },
        },
      ],
    };
  },
}
</script>

<style>

</style>