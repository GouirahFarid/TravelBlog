<template>
  <section class="section one">
    <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-4 mt-6">
          <figure class="image is-square">
            <img src="../assets/travel_image/4.jpg">
          </figure>
        </div>
        <div class="column is-3-touch is-offset-1-desktop mt-6">
          <h2 class="is-size-4-desktop is-size-6-touch my-3">An amazing Journey Through The Mountains</h2>
          <p class="para2 is-size-7-touch">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, delectus dicta doloribus esse explicabo labore minima minus pariatur quam, sed vel! Nisi numquam
            praesentium sapiente voluptas voluptatibus. Culpa, rem.</p>
        </div>
        <div class="column is-4-touch  rotate">
          <h3 class="is-size-7-touch is-size-4-desktop">An amazing Journey Through The Mountains</h3>
        </div>
        <div class="column is-12-mobile is-12 my-6">
          <div class="columns is-multiline">
            <div class="column is-8 my-3 py-6">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <div class="card img-one my-3 py-6">
                    <div class="card-content">
                      <h1 class="is-size-3 my-3">Lorem ipsum dolor sit amet, consectetur </h1>
                      <p class="parag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        commodi consequatur corporis cumque dolore dolorum eos eum, exercitationem expedita facilis hic
                        labore nisi perspiciatis praesentium ratione suscipit vel veniam voluptas.</p>
                      <BaseReadMore></BaseReadMore>
                    </div>
                  </div>
                </div>
                <div class="column is-6 img-one">
                  <img class="img-one" src="../assets/travel_image/6.jpg">
                </div>
              </div>
            </div>
            <div class="column should-hidden is-3 is-offset-1">
              <img class="img-two" src="../assets/travel_image/2.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionOne"
};
</script>

<style scoped>
.rotate{
  transform: rotate(90deg);
}
.para2{
  height: 70px;
  overflow: hidden;
}
@media (min-width: 750px) {
  .para2{
    height: 140px;
  }
}
.img-one,.img-two{height: 500px}
.parag{
  max-height: 150px;
  overflow: hidden;
}
@media (max-width: 767px) {
  .should-hidden{
    height: 140px;
    display: none;
  }
  .img-one{
    height:300px;
    width: 100%;
  }
  .parag{
    height: 50px;
  }
}
</style>