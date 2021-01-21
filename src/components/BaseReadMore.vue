<template>
  <router-link :to="{ name: routeName, params: { id: routeParameter } }">
    <span class="icon-text">
      <span>READ MORE</span>
      <span class="icon">
        <i class="fas fa-arrow-right"></i>
      </span>
    </span>
  </router-link>
</template>

<script>

export default {
  name: "BaseReaMore",
  props:{
    routeName:{
      type:String,
      require:true
    },
    routeParameter:{
      type:Number,
      require: true
    }
  }
};
</script>

<style scoped></style>
