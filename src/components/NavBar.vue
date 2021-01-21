<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/myLogo.png" width="112" height="28" />
        </a>
        <a
          @click="makeBurger"
          :class="{ 'is-active': activator }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': activator }"
      >
        <div class="navbar-end">
          <router-link  class="navbar-item nav" to="/"><span @click="getActive(1)" :class="{'is-active':isActive==1}">HOME</span></router-link>
          <router-link  class="navbar-item nav" to="/"><span @click="getActive(2)" :class="{'is-active':isActive==2}">PLACES</span></router-link>
          <router-link  class="navbar-item nav" to="/"><span @click="getActive(3)" :class="{'is-active':isActive==3}" >DESTINATIONS</span></router-link>
          <router-link   class="navbar-item nav" to="/"><span @click="getActive(4)" :class="{'is-active':isActive==4}">TRAVEL TIPS</span></router-link>
          <router-link  class="navbar-item nav" to="/"><span @click="getActive(5)" :class="{'is-active':isActive==5}" >TRAVEL RESOURCES</span></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activator: false,
      isActive:1
    };
  },
  methods: {
    makeBurger() {
      this.activator = !this.activator;
    },
    getActive(index){
      this.isActive=index;
    }
  }
};
</script>

<style scoped lang="scss">
.nav:hover{
  color:#ffd45b;
  border-bottom: 1px solid #ffd45b;
}
.is-active{
  color:#ffd45b;
  border-bottom: 1px solid #ffd45b;
}
</style>
