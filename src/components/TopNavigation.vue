<template>
  <nav
    class="px-2 sm:px-4 py-2.5 z-1000 dark:bg-gray-900 drop-shadow text-primaryBrown"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link to="/" class="mx-2 lg:mx-10">
        <!-- class="animate-spin" -->
        <div
          class="text-base hover:rounded-full transition ease-in-out duration-100 scale-100 hover:scale-105 font-bold text-primaryPurple mx-8 my-4"
        >
          écouté
        </div>
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        ></span>
      </router-link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="hidden right-0 w-full md:block md:w-auto md:mx-32"
        id="navbar-default"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm font-bold"
        >
          <!-- home page -->
          <li v-if="home">
            <router-link
              to="/"
              class="block text-primaryPurple transition ease-in-out duration-300 delay-150 underline underline-offset-4 py-2 pr-4 pl-3 text-whiterounded md:bg-transparent md:text-primaryYellow md:p-0 dark:text-white"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li v-else>
            <router-link
              to="/"
              class="block text-primaryDark hover:text-primaryPurple transition ease-in-out duration-300 delay-150 hover:underline hover:underline-offset-4 py-2 pr-4 pl-3 text-whiterounded md:bg-transparent md:text-primaryYellow md:p-0 dark:text-white"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <!-- maps -->
          <li v-if="maps">
            <router-link
              to="/locations"
              class="block py-2 pr-4 pl-3 text-primaryPurple transition ease-in-out duration-300 delay-150 border-b underline underline-offset-4 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Map</router-link
            >
          </li>
          <li v-else>
            <router-link
              to="/locations"
              class="block py-2 pr-4 pl-3 text-primaryDark hover:text-primaryPurple transition ease-in-out duration-300 delay-150 border-b hover:underline underline-offset-4 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Map</router-link
            >
          </li>

          <li v-if="stats">
            <router-link
              to="/stats"
              class="block py-2 pr-4 pl-3 border-b border-gray-100 text-primaryPurple transition ease-in-out duration-300 delay-150 underline underline-offset-4 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Analytics</router-link
            >
          </li>

          <li v-else>
            <router-link
              to="/stats"
              class="block py-2 pr-4 pl-3 text-primaryDark border-b border-gray-100 hover:text-primaryPurple transition ease-in-out duration-300 delay-150 hover:underline underline-offset-4 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Analytics</router-link
            >
          </li>

          <li>
            <router-link
              v-if="userprofile"
              to="userProfile"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 transition ease-in-out duration-300 delay-100 hover:underline underline-offset-4 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >User Profile</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["maps", "home", "stats", "userprofile"],
  components: {},
  data() {
    return {};
  },
  methods: {
    showNotifications() {
      console.log("Icon clicked !");
      this.notificationsBadge = !this.notificationsBadge;
      this.$emit("toggleNotification", this.notificationsBadge);
    },
    // TODO : Implement check is user is logged in
    checkIfUserIsLggedin() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
        } else {
        }
      });
      //User signed in
      var user = auth.currentUser;
      if (user) {
        // signed in
      } else {
        // not
      }
    },
  },
  mounted() {
    console.log("state - ", this.maps);
  },
};
</script>

<style></style>
