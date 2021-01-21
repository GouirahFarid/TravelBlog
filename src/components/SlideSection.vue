<template>
<section class="section">
  <div CLASS="container is-rounded">
    <div class="columns is-multiline">
      <div class="column is-12 slide">
        <img class="slide-img" :src="currentImage.imageUrl" :alt=currentImage.imageName>
         <div class="card slide-card">
           <div class="card-content">
             <div class="para">
               <p class="is-size-8-touch">Why you should go for trip ....<span class="icon"><i class="fa fa-plane"></i></span></p>
               <p class="is-size-2-widescreen is-size-3-desktop is-size-4-touch">Traveling is Easier  than You think</p>
             </div>
             <BaseReadMore></BaseReadMore>
           </div>
         </div>
        <div class="navigation-slide is-mobile">
          <div class="container is-fullhd">
            <div class="columns is-multiline">
              <div class="column is-2 is-offset-5-desktop mt-6">
                <span  @click="getCurrentImage(index-1)" :class="{'is-static':index==0}" class="icon button is-text">
                   <i class="fas fa-arrow-left"></i>
                </span>
                <span @click="getCurrentImage(index+1)" :class="{'is-static':index==images.length-1}" class="icon button is-text">
                   <i class="fas fa-arrow-right"></i>
                </span>
              </div>
              <div class="column is-6-touch">
                <div class="columns is-multiline">
                  <div @click="getCurrentImage(index)" v-for="(img,index) in images" :key="img.imageName" class="column is-4-touch is-mobile">
                    <img  :class="{'nav-img':img.imageName==currentImage.imageName}" :src="img.imageUrl" :alt="img.imageName">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-12-mobile is-offset-3-desktop is-7-desktop">
          <article class="media article-media">
            <figure class="media-left mt-6">
              <p class="is-size-4">
                World's hottest destinations for vegans
              </p>
            </figure>
            <div class="media-content">
              <div class="card">
                <div class="card-content">
                  <p class="para has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    commodi consequatur corporis cumque dolore dolorum eos eum, exercitationem expedita facilis hic
                    labore nisi perspiciatis praesentium ratione suscipit vel veniam voluptas.</p>
                  <BaseReadMore></BaseReadMore>
                </div>
              </div>
            </div>
          </article>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "SlideSection",
  data(){
    return{
      images:[
        {
          imageName:'image3',
          imageUrl:require('@/assets/slideImages/image3.jpg')
        },
        {
          imageName:'image2',
          imageUrl:require('@/assets/slideImages/image2.jpg')
        },
        {
          imageName:'image1',
          imageUrl:require('@/assets/slideImages/image1.jpg')
        }
      ],
      currentImage:'',
      index:0
    }
  },
  mounted() {
    this.currentImage=this.images[0];
  },
  methods:{
    getCurrentImage(index){
      this.currentImage=this.images[index]
      this.index=index;
    }
  }
};
</script>

<style scoped lang="scss">
.is-static{
  border: 0 solid;
  background-color: transparent;
}
.slide{
  position: relative;
  height: 600px;
  margin-bottom: 30px;
}
.slide-img,.slide-card,.navigation-slide{
  position: absolute;
}
.slide-img{
  left: 0;
  top: 0;
  width: 80%;
  height:83%;
  max-width:100%;
  max-height:100%;

}
.slide-card{
  width: 35%;
  height: 40%;
  right: 10%;
  top: 20%;
  background-color: #282829;
  color: #f1fffd;
}
.navigation-slide{
  bottom: 5%;
  width: 100%;
}
.nav-img{
  border: 2px solid #7180ff;
}
.media-left{
  width: 200px;
}
.para{
  height: 170px;
  overflow: hidden;
}
</style>