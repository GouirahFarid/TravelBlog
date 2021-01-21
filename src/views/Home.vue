<template>
  <div class="home pt-4 is-justify-content-center">
    <SlideSection></SlideSection>
    <SectionOne></SectionOne>
    <ActionSection></ActionSection>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import SectionOne from "@/components/SectionOne";
import SlideSection from "@/components/SlideSection";
import ActionSection from "@/components/ActionSection";
export default {
  name: "Home",
  components: {
    SlideSection,Footer,SectionOne,ActionSection
  }
};
</script>
