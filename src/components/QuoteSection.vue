<template>
<section class="section">
  <div class="columns is-multiline">
    <div class="column is-12 has-text-centered">
      <h1 class="is-size-2"><span class="icon"><i class="fas fa-quote-left"></i></span> </h1>
      <blockquote class="is-size-3 mx-6 px-6">
        We're a bold bunch of riders explorers & hard-core thrill seekers that bring it.
      </blockquote>
    </div>
    <div class="column is-12">
      <div class="columns is-multiline">
        <div class="column is-12-touch is-6-desktop">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="@/assets/travel_image/5.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h3 class="is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti dicta eligendi expedita, odit optio quis rem rerum veniam voluptatem? Dolorem eligendi est illum magni molestiae quasi sequi sit voluptate!</p>
                <BaseReadMore></BaseReadMore>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-12-touch is-offset-1-desktop is-4-desktop">
            <img class="image-one mt-6" src="../assets/slideImages/image1.jpg">
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "QouteSection"
};
</script>

<style scoped lang="scss">
.image-one{
  height: 80%;
  width: 100%;
}
</style>