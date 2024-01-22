<template>
  <div>
    <h1>Hola esto es un formulario</h1>

    <form action="">
        <p>
            <label for="name">Nombre</label>
            <input id="name" v-model="name" name="name" type="text">
        </p>
        <p>
            <label for="lastname">Apellido Paterno</label>
            <input id="lastname" v-model="lastname" name="lastname" type="text">
        </p>
        <p>
            <label for="lastname">Apellido Materno</label>
            <input id="surname" v-model="surname" name="surname" type="text">
        </p>
        <p>
            <label for="cp">Codigo Postal</label>
            <input id="cp" v-model="cp" name="cp" type="number">
        </p>
        <p>
            <label for="street">Calle</label>
            <input id="street" v-model="street" name="street" type="text">
        </p>
        <p>
            <label for="number">Numero</label>
            <input id="number" v-model="number" name="number" type="number">
        </p>
        <p>
            <label for="city">Ciudad</label>
            <input id="city" v-model="city" name="city" type="text">
        </p>
        <p>
            <label for="email">Correo eletronico</label>
            <input id="email" v-model="email" name="email" type="email">
        </p>
        <p>
            <label for="phone">Numero telefónico</label>
            <input id="phone" v-model="phone" name="phone" type="email">
        </p>
        <p>
            <label for="image">Fotografia</label>
            <input id="image" name="image" type="file">
        </p>
        
    </form>

    <b-container >
      <b-row>
        <b-col >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>