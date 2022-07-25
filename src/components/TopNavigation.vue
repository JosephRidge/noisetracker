<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 z-1000  dark:bg-gray-900 shadow-md text-primaryBrown"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link to="/" class="flex items-center">
        <!-- <img
          src="src/assets/logo.svg"
          class="mr-3 h-6 sm:h-9 "
          alt="Mountain Bongo Logo"
        /> -->
        <svg
          class="mr-3 h-6 sm:h-9"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill="#5A352A"/>
          <path  class="transition ease-in-out   translate-x-0 hover:translate-x-1"
            d="M31.5997 14.0584L31.5826 
            14.0213L31.5724 14.0111C31.463 13.8793 30.9026 13.1525 30.7693
             11.8273L30.7659 11.807L29.4367 9.17358L28.825 7.69629L28.7122 
             7.80447C27.7896 8.71383 28.1347 9.83955 28.2031 9.93758C28.2065 
             9.9511 28.2133 9.97815 28.1997 10.0052C28.1928 10.0221 28.1757 
             10.0322 28.1552 10.039C27.998 10.0829 24.2768 11.114 22.7562 14.2038C22.3803 
             14.9678 24.8231 12.1992 24.0577 12.4121C23.6271 12.5338 20.084 15.36 19.568
              15.36C18.9939 15.36 18.5257 15.5121 17.8594 15.36C17.1657 15.2011 16.3354
               15.4512 15.7681 15.4512C14.8865 15.4512 14.1552 15.6439 13.5914 16.0225C13.1677
                16.3099 12.8328 16.7088 12.597 17.2091C11.6744 17.4491 9.88382 18.3348 10.0923 21.5869C10.1367 22.0027 10.2631 23.4462 10.0547 24.5618L10 24.866L10.4784 24.4401C11.1037 23.8856 11.4796 23.098 11.5309 22.2258C11.6197 20.8094 11.9785 19.9406 12.2485 19.4741C12.3134 19.9845 12.4706 20.5017 12.7337 21.0156C13.4855 22.4963 13.1608 23.4124 12.7508 23.9228C12.5253 24.2034 12.4706 24.5584 12.6107 24.8288C12.9046 25.3832 12.826 26.2757 12.7064 26.9315C12.6961 27.0093 12.7166 27.0904 12.7679 27.1512C12.8226 27.2189 12.9011 27.256 12.99 27.256H13.2975C13.3283 27.256 13.359 27.2797 13.3659 27.3101L13.7383 28.7976C13.8169 29.1153 14.104 29.3384 14.432 29.3384H15.505C15.833 29.3384 16.0962 29.0748 16.0962 28.7502C16.0962 28.6556 16.062 28.5575 16.0073 28.4832L14.7396 26.7895C14.6165 26.6239 14.5482 26.421 14.5482 26.2216V25.2412C14.5482 24.9133 14.7225 24.6091 15.0164 24.4265C17.1828 23.054 17.1965 19.3895 17.1931 19.2273C17.1931 19.1901 17.2238 19.1597 17.2717 19.1563C17.3058 19.1563 17.3332 19.1935 17.3332 19.2307C17.3332 19.4774 17.3195 20.1434 17.1623 20.9581L17.1486 21.0223L17.2033 21.0595C17.5245 21.2894 18.7615 22.0433 21.1194 22.0433C21.6148 22.0433 22.1342 22.0095 22.6673 21.9452L22.7937 21.9283L22.7527 21.8066C22.4657 20.9513 22.0078 20.4815 22.001 20.4781C21.9873 20.4646 21.9805 20.4476 21.9839 20.4307C21.9839 20.4206 21.9873 20.4003 22.0078 20.3834C22.0249 20.3665 22.042 20.3631 22.0556 20.3631C22.0761 20.3631 22.0932 20.3699 22.1069 20.3834C22.2368 20.5186 23.361 21.7728 23.0808 23.8924C23.0193 24.3589 23.2106 24.7544 23.3815 25.0046C23.6036 25.3258 23.7984 25.9275 23.4772 26.9721C23.4088 27.1918 23.4635 27.4251 23.6207 27.5975C23.8531 27.8544 24.1128 28.3446 24.0171 29.2201L24.0102 29.3317H26.2587L26.2758 29.2472C26.3373 28.9362 26.4227 27.8679 24.9226 27.1479C24.8953 27.1343 24.8782 27.1073 24.8782 27.0802L25.0456 22.8918C25.0456 22.8783 25.0525 22.8647 25.073 22.8478C25.2951 22.6078 26.392 21.3232 26.1323 19.7513L26.1255 19.7039C26.0264 19.1461 25.7632 18.6053 25.3361 18.1016C25.319 18.0813 25.319 18.061 25.319 18.0509C25.319 18.0407 25.3258 18.0204 25.3429 18.0035C25.36 17.99 25.3771 17.9866 25.3874 17.9866C25.4079 17.9866 25.4249 17.9968 25.4386 18.0103C25.835 18.4802 26.0981 18.9771 26.2177 19.4943L26.2519 19.6397L26.3783 19.5586C27.5606 18.7979 27.3932 14.4743 27.3864 14.2917L27.383 14.2478L27.3522 14.2173C27.3146 14.1835 27.2873 14.1463 27.2599 14.1125C26.7645 13.433 27.1267 12.3817 27.1711 12.2634C27.1813 12.2397 27.2053 12.2194 27.2531 12.2194C27.2565 12.2194 27.2599 12.2194 27.2634 12.2194C27.2975 12.233 27.318 12.2769 27.318 12.2904C27.277 12.3479 26.9182 13.3992 27.3761 14.0314C27.4069 14.0753 27.441 14.1159 27.4821 14.1531L27.5094 14.1768C27.7657 14.4202 30.0312 15.6372 30.5711 15.6372C30.6224 15.6372 28.8113 14.5452 28.8728 14.5419C28.8899 14.5419 28.907 14.552 28.9138 14.5588L29.8433 15.36C30.0552 15.5425 30.308 15.6372 30.5711 15.6372C30.8308 15.6372 31.3605 15.7994 31.5724 15.6372C31.9038 15.387 31.9038 14.6298 31.5997 14.0584ZM29.7066 12.5034C29.6964 12.5135 29.6827 12.5169 29.6656 12.5169C29.6451 12.5169 29.6212 12.5068 29.6075 12.4899L29.112 11.8442C29.0881 11.8138 29.0949 11.7698 29.1257 11.7462C29.1359 11.736 29.1496 11.7326 29.1667 11.7326C29.1906 11.7326 29.2111 11.7428 29.2248 11.7631L29.7237 12.4121C29.7374 12.429 29.7374 12.4459 29.7374 12.4595C29.7339 12.473 29.7237 12.4899 29.7066 12.5034Z"
            fill="#FF9F1C"
          />
        </svg> 
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
        class="hidden w-full md:block md:w-auto md:mx-32"
        id="navbar-default"
      >
        <ul
          v-if="this.maps === false || maps == undefined"
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm font-bold"
        >
          <li  v-if="!onboarding">
            <router-link
          
              to="/"
              class="block py-2 pr-4 pl-3 text-white bg-primaryBrown transition ease-in-out duration-300 delay-100 rounded md:bg-transparent md:text-primaryYellow md:p-0 dark:text-white"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li v-if="onboarding">
            <router-link           
              to="/"
              class="block py-2 pr-4 pl-3 text-white bg-primaryBrown transition ease-in-out duration-300 delay-100 rounded md:bg-transparent md:text-primaryYellow md:p-0 dark:text-white"
              aria-current="page"
              >Onboarding</router-link
            >
          </li>
          <li>
            <router-link
              to="/tracking"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b transition ease-in-out duration-300 delay-100 hover:underline underline-offset-4 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Map</router-link
            >
          </li>
          <li>
            <router-link
              to="/forum"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 transition ease-in-out duration-300 delay-100 hover:underline underline-offset-4 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Forum</router-link
            >
          </li>
          <li>
            <router-link
              to="userProfile"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 transition ease-in-out duration-300 delay-100 hover:underline underline-offset-4 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primaryYellow md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >User Profile</router-link
            >
          </li>
        </ul>
        <div v-if="this.maps === true" class="flex gap-4 my-auto mx-auto">
          <!-- notifcations -->
          <div class="w-auto">
            <!-- <img src="src/assets/notifcations.svg"
 class="scale-75 hover:scale-90 focus:scale-50 transition ease-in-out duration-50" alt="" srcset=""> -->
            <div class="flex flex-row-reverse">
              <svg
                width="42"
                @click="showNotifications"
                class="scale-75 hover:animate-pulse hover:scale-90 focus:scale-50 transition ease-in-out duration-50"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="21" cy="20.5" rx="21" ry="20.5" fill="#FF9F1C" />
                <path
                  d="M11.8136 18.3085C11.8136 16.9482 12.1038 15.6593 12.6843 14.4417C13.2647 13.2242 14.0928 12.1872 15.1684 11.3307L16.2183 12.4643C15.3135 13.1864 14.6092 14.0555 14.1056 15.0715C13.6019 16.0875 13.3501 17.1665 13.3501 18.3085H11.8136ZM28.5363 18.3085C28.5363 17.1665 28.2973 16.0875 27.8193 15.0715C27.3412 14.0555 26.6498 13.1864 25.7449 12.4643L26.7949 11.3307C27.8534 12.204 28.6644 13.2452 29.2278 14.4543C29.7912 15.6635 30.0729 16.9482 30.0729 18.3085H28.5363ZM12.7355 27.5535V26.042H14.8867V18.3337C14.8867 16.9566 15.3092 15.7097 16.1543 14.5929C16.9994 13.4761 18.1134 12.775 19.4963 12.4895V11.7589C19.4963 11.3727 19.6371 11.0536 19.9188 10.8017C20.2005 10.5498 20.5377 10.4238 20.9304 10.4238C21.3231 10.4238 21.6603 10.5498 21.942 10.8017C22.2237 11.0536 22.3645 11.3727 22.3645 11.7589V12.4895C23.7474 12.775 24.8657 13.4761 25.7193 14.5929C26.573 15.7097 26.9998 16.9566 26.9998 18.3337V26.042H29.1253V27.5535H12.7355ZM20.9304 30.5764C20.3841 30.5764 19.906 30.379 19.4963 29.9844C19.0866 29.5897 18.8817 29.1153 18.8817 28.5611H22.9791C22.9791 29.1153 22.7785 29.5897 22.3773 29.9844C21.9761 30.379 21.4938 30.5764 20.9304 30.5764ZM16.4232 26.042H25.4632V18.3337C25.4632 17.0742 25.0279 16.012 24.1572 15.1471C23.2865 14.2822 22.2194 13.8498 20.956 13.8498C19.6756 13.8498 18.6 14.2822 17.7293 15.1471C16.8586 16.012 16.4232 17.0742 16.4232 18.3337V26.042Z"
                  fill="#5A352A"
                />
              </svg>
              <div
                class="absolute z-1000 bg-red-800 border translate-x-1 rounded-full text-white font-bold text-xs w-fit h-5 p-0.5 text-center"
              >
                3
              </div>
            </div>
            <!-- <NotifcationsVue class="  " /> -->
          </div>

          <!-- forum -->
          <img
            src="src/assets/forum.svg"
            class="transition ease-in-out duration-150 scale-75 hover:scale-90"
            alt=""
            srcset=""
          />
        </div> 
      </div>
    </div>
  </nav>
</template>

<script>
export default { 
  props:['maps', 'onboarding'], 
  components: {
    NotifcationsVue,
  },
  data() {
    return {
      authenticated: false,
      notificationsBadge: false,
    };
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
