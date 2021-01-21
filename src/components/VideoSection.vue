<template>
  <section class="section">
    <div class="container is-fullhd">
      <div class="columns is-multiline">
        <div class="column is-8">
          <div class="columns is-multiline">
            <div class="column is-12">
              <video
                controls
                ref="myvideo"
                :src="currentVideo.url"
                width="100%"
              ></video>
            </div>
            <div class="column is-12">
              <p class="mx-6 px-6 has-text-justified">{{currentVideo.description}}</p>
            </div>
          </div>
        </div>
        <div class="column has-text-centered-touch is-2">
            <p  v-for="(video,index) in videos" :key="index" class="py-3 my-3" :class="{'has-text-info':index==currentIndex}" >
              <span class="icon">
                <i class="fas fa-arrow-left"></i>
              </span>
              {{video.name}}
             <span :class="{'is-primary':index==currentIndex}" @click="getCurrentVideo(index)"  class="icon button is-rounded mx-3"><i class="fas fa-play-circle"></i></span>
            </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoSection",
  data() {
    return {
      isPlaying: false,
      currentIndex:'',
      videos:[
        {
          name:'video1',
          url:require('@/assets/videos/video1.mp4'),
          description:'video 1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta eos error esse ipsum, quis quos sunt\n' +
            '                temporibus. Cupiditate dolore ipsum minima saepe soluta! Accusantium amet assumenda error iste officia.'
        },
        {
          name:'video2',
          url:require('@/assets/videos/video2.mp4'),
          description:' video2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta eos error esse ipsum, quis quos sunt\n' +
            '                temporibus. Cupiditate dolore ipsum minima saepe soluta! Accusantium amet assumenda error iste officia.'
        },
        {
          name:'video2',
          url:require('@/assets/videos/video13.mp4'),
          description:'video3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta eos error esse ipsum, quis quos sunt\n' +
            '                temporibus. Cupiditate dolore ipsum minima saepe soluta! Accusantium amet assumenda error iste officia.'
        }
      ],
      currentVideo:'',
      }
    },
  mounted() {
    this.currentVideo=this.videos[0];
    this.currentIndex=0;

  },
  methods: {
    getCurrentVideo(index) {
      this.currentVideo=this.videos[index]
      this.currentIndex=index
    },
    /*play(index) {
      if(this.currentIndex!=index){
        this.currentVideo=this.currentVideo[index];
        this.currentIndex=index
      }
      this.$refs.myvideo.play()
      this.isPlaying = true
    },
    stop(index) {
      if(this.currentIndex!=index){
        this.currentVideo=this.currentVideo[index];
        this.currentIndex=index
      }
      this.$refs.myvideo.pause()
      this.isPlaying = false
    }*/
  }

};
</script>

<style scoped>
</style>
