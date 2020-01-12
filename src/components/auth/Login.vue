<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-center h-screen">
      <div class="lg:w-1/3">
        <div class="bg-white shadow-md rounded px-8 py-16 mb-4">
          <h1 class="text-center mb-2 text-lg">Login</h1>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="email"
                required
                autofocus
              />
            </div>

            <div class="mb-4">
              <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="password"
                required
                autofocus
              />
            </div>

            <button
              type="submit"
              class="bg-green-400 hover:bg-green-500 trans text-white rounded px-4 py-1 text-sm focus:outline-none focus:shadow-outline"
            >Login</button>
            <p class="text-red-500 text-xs italic mt-6" role="alert" v-if="error">{{ error }}</p>
            <p
              class="text-blue-500 text-xs italic mt-6"
              role="alert"
              v-if="loading && !error"
            >Loading...</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "Login"
  },
  data() {
    return {
      email: "",
      password: "",
      device_name: "app"
    };
  },
  computed: {
    ...mapGetters("auth", ["authUser", "error", "loading"])
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", this.$data).then(() => {
        this.$router.push(this.$route.query.redirect || "/");
      });
    }
  },
  mounted() {
    axios.get("http://localhost:8080/airlock/csrf-cookie");
  }
};
</script>
