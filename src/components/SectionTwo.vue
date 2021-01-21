<template>
  <section class="my-6">
    <div class="container">
      <div class="columns is-multiline">

        <div class="column is-12 my-6">
          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="../assets/travel_image/5.jpg" alt="Placeholder image">
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
            <div class="column is-6">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <h3 class="is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti dicta eligendi expedita, odit optio quis rem rerum veniam voluptatem? Dolorem eligendi est illum magni molestiae quasi sequi sit voluptate!</p>
                    <BaseReadMore></BaseReadMore>
                  </div>
                </div>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="../assets/travel_image/7.jpg" alt="Placeholder image">
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionTwo"
};
</script>

<style scoped lang="scss">
.img-one,.img-two{height: 500px}
.parag{
  max-height: 150px;
  overflow: hidden;
}
</style>