<template>
<section class="section">
  <div class="columns is-multiline">
    <div class="column is-12 has-text-centered"><p class="is-size-2">Adventure & Action In Travel </p></div>
    <div class="column is-12"><SectionTwo></SectionTwo></div>
    <div class=" column is-12"><VideoSection></VideoSection></div>
    <div class="column is-12"><QouteSection></QouteSection></div>

  </div>
</section>
</template>

<script>
import SectionTwo from "@/components/SectionTwo";
import VideoSection from "@/components/VideoSection";
import QouteSection from "@/components/QuoteSection";
export default {
  name: "ActionSection",
  components:{
    SectionTwo,VideoSection,QouteSection
  }
};
</script>

<style scoped>

</style>