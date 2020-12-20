<template>
  <article>
    <header class="bg-gray-300 border-b p-5">
      <h1 class="uppercase">Protected</h1>
    </header>
    <div class="p-5">
      <p class="text-blue-500 mb-2">Another protected page...</p>
      <button
        type="button"
        class="bg-blue-400 hover:bg-blue-500 trans text-white rounded px-4 py-1 text-sm focus:outline-none focus:shadow-outline"
        @click="logout"
      >Logout</button>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters("auth", ["authUser", "loggedIn"])
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
