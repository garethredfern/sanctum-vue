<template>
  <article>
    <header class="bg-gray-300 border-b p-5">
      <h1 class="uppercase">Dashboard</h1>
    </header>
    <div class="p-5">
      <p class="text-blue-500">Welcome to your dashboard...</p>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters("auth", ["authUser", "loggedIn"])
  }
};
</script>
