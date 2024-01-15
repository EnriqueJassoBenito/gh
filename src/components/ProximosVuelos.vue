<template>
  <div>
    <h1>AQUI ES PROXIMOS VUELOS</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to= "{name: 'vueloscancelados'}">Atras</b-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          href: "#",
          to: { name: "vueloscancelados" },
        },
      ],
    };
  },
}
</script>

<style>

</style>