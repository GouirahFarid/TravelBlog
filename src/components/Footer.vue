<template>
  <footer class="footer has-text-white has-background-black-bis py-6 m-0">
    <div class="container  is-fullhd m-0 p-0">
      <div class="columns is-multiline">
        <div class="column is-full  py-6">
          <div class="columns is-multiline is-8 is-variable">
            <div class="column  is-3">
              <aside class="p-3">
                <ul class="menu-list p-3">
                  <li class="my-3">
                  <img src="../assets/logoWihte.png" width="112" height="28" />
                  </li>
                  <li class="my-3">
                    <span class="icon-text">
                      <span class="icon">
                        <i class="fas fa-phone-alt"></i>
                      </span>
                      <span class="pl-3">125-896-258</span>
                    </span>
                  </li>
                  <li class="my-3">
                    <span class="icon-text">
                      <span class="icon">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="pl-3">contact@travelblog.com</span>
                    </span>
                  </li>
                  <li class="my-3 ">
                    <span class="icon mr-4 px-3 has-text-primary"><i class="fab fa-twitter fa-lg"></i></span>
                    <span class="icon mr-4 px-3 has-text-danger"><i class="fab fa-instagram fa-lg"></i></span>
                    <span class="icon mr-4 px-3 has-text-primary-dark "><i class="fab fa-facebook fa-lg"></i></span>
                    <span class="icon mr-4 px-3 has-text-danger-dark"><i class="fab fa-youtube fa-lg"></i></span>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="column is-6">
              <aside class="p-3">
                <p class="title is-size-4 has-text-white">Subscribe To Our Newsletter</p>
                <p class="subtitle is-size-5 has-text-white ">Get the best delivered straight into your inbox!</p>
                <form>
                  <div class="field has-addons has-addons-fullwidth">
                      <p class="control">
                        <input class="input news-input" type="text" placeholder="You E-mail Address">
                      </p>
                      <p class="control">
                        <a class="button new-button">
                          Transfer
                        </a>
                      </p>
                  </div>
                </form>
              </aside>
            </div>
            <div class="column is-3">
              <aside>
                <ul class="has-text-white ">
                  <li><router-link class="navbar-item nav" to="/"><span class="nav">PLACES</span></router-link></li>
                  <li><router-link class="navbar-item nav" to="/"><span class="nav">DESTINATIONS</span></router-link></li>
                  <li><router-link class="navbar-item nav" to="/"><span class="nav">TRAVEL TIPS</span></router-link></li>
                  <li><router-link class="navbar-item nav" to="/"><span class="nav">TRAVEL RESOURCES</span></router-link></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
        <div class="column is-full has-text-white has-text-centered py-6" >
          &copy; Copyright 2017TravelBlog Design by
          <strong  class="has-text-white">Zisan</strong>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.news-input{
  background-color: transparent;
  border-radius: 0;
  border:1px solid #bec5bf;
  color: #fdfff4;
}
.new-button{
  background-color: #d2d6ca;
}
.nav:hover{
  color:#ffd45b;
  border-bottom: 1px solid #ffd45b;
}
</style>