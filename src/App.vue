<template>
  <div id="app" class="h-screen text-gray-900 bg-gray-100 px-4">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import "@/assets/css/main.css";

export default {
  name: "app",
  components: {}
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700|Material+Icons");

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
