<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col class="bg-light ">
          <div>
            <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
              <b-navbar-brand href="#">
                <img
                  src="https://placekitten.com/g/30/30"
                  class="d-inline-block align-top"
                  alt="Kitten"
                />
                Logo
              </b-navbar-brand>
              <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

              <b-collapse id="navbar-nav" is-nav>
                <b-navbar-nav class="ml-auto">
                  <b-nav-item href="#">Inicio</b-nav-item>
                  <b-nav-item href="#">Acerca de</b-nav-item>
                  <b-nav-item href="#">Contacto</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="3">
          <div>
            <!-- <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button> -->
            <b-sidebar
              id="sidebar-1"
              z-index="0"
              visible
              no-close-on-esc
              no-header-close
              no-header
              no-close-on-route-change
            >
              <div class="px-3 py-2">
                <nav class="mb-3 mt-5">
                  <b-nav vertical>
                    <b-nav-item :to="{name: 'iniciolandage'}">Inicio</b-nav-item>
                    <b-nav-item :to="{name: 'main'}">Main</b-nav-item>
                    <b-nav-item :to="{name: 'tercero'}">Tercero</b-nav-item>
                  </b-nav>
                </nav>
                <p>
                  Rakataka taka taka bum bum Mi vidrio explota bum raka bum Se
                  vuelve loca bum bum Esto es una fiesta bum raka bum Esto
                  revienta! Jajajaja
                </p>
                <b-img
                  src="https://i.pinimg.com/564x/0f/cf/24/0fcf24900f13e205ca5d15c62980fc5f.jpg"
                  fluid
                  thumbnail
                ></b-img>
              </div>
            </b-sidebar>
          </div>
        </b-col>
        <b-col class="mt-5">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
b-sidebar {
  position: relative;
  position: absolute;
}
</style>

<!-- src="https://i.pinimg.com/564x/33/5c/41/335c4105f35155f8a573265c0a2713de.jpg" -->
<!-- src="https://i.pinimg.com/564x/9c/35/68/9c35680348fc93fc23b7a2577db26776.jpg" -->