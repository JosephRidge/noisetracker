<template>
  <div class=" h-screen home ">
  <TopNavigationVue :home="true" class="bg-gray-50"/>
  <div class="mx-20 my-8 px-3 lg:px-8">
       <!-- Topic -->
    <div class="text-4xl font-bold
    text-primaryPurple  my-4">écouté</div>
    <!-- Solution Description  -->
    <div class="text-xl font-light text-gray-500
     max-w-xl text-justify tracking-tighter  ">
      Enabling optimal urban location planning through tracking and mitigatio of
      noise pollution prone locations. Using highly intelligent IoT systemms and
      cloud platforms.
    </div>

  </div>
 
    <!--  Journey Flow Cards -->
    <div class="flex justify-center mx-auto my-10 gap-5">
    
      <!-- Card one -->
      <div
        class="bg-white flex flex-col w-72 h-80 border-2 border-gray-200 transition ease-in-out duration-150 delay-150 hover:cursor-pointer hover:border-primaryPurple translate-y-0 hover:-translate-y-2 rounded-lg overflow-hidden shadow-lg"
      >
        <img
          class="w-40 mx-auto px-3 p-2 transition ease-in-out"
          src="src/assets/finger-print-lock-success.gif"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-2">
          <div class="font-bold text-xl text-primaryDark mb-2">
            User Verification
          </div>
          <p class="text-primaryDark font-light text-base pb-4">
            Secure access to the data collected within the deployed regions.
            This feature focuses on role based authentication.
          </p>
        </div>
      </div>
      <!-- Card Two -->
      <div
        class="bg-white flex flex-col
         border-2 border-gray-200 
         transition ease-in-out 
         duration-150 delay-150 
         
         hover:border-yellow-300
          translate-y-0 hover:-translate-y-2
           w-72 h-80 mx-18
            hover:cursor-pointer rounded-lg overflow-hidden shadow-lg"
      >
        <svg
          width="64"
          height="auto"
          viewBox="0 0 45 64"
          fill="none"
          class="my-auto w-16 mx-auto p-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.02 58.7401C44.02 61.6501 34.16 64.0001 22.01 64.0001C9.86 64.0001 0 61.6501 0 58.7401C0 56.1401 7.9 54.0001 18.26 53.5601H25.76C36.13 54.0001 44.02 56.1401 44.02 58.7401V58.7401Z"
            fill="#E3E2E1"
          />
          <path
            class="animate-bounce transition ease-in-out duration-150 delay-300 absolute"
            d="M22.01 0C10.71 0 1.55005 9.15 1.55005 20.45C1.55005 31.75 22.01 58.74 22.01 58.74C22.01 58.74 42.46 31.75 42.46 20.45C42.46 9.15 33.31 0 22.01 0ZM22.01 33.99C14.53 33.99 8.47005 27.93 8.47005 20.45C8.47005 12.97 14.53 6.91 22.01 6.91C29.49 6.91 35.55 12.97 35.55 20.45C35.55 27.93 29.49 33.99 22.01 33.99Z"
            fill="#E82327"
          />
        </svg>
        <div class="px-6 py-2">
          <div class="font-bold text-xl text-primaryDark mb-2">
            Monitoring & Tracking
          </div>
          <p class="text-primaryDark font-light text-base pb-4">
            Providing real time location and sound levels data telemetry within
            the current location/ region or area.
          </p>
        </div>
      </div>
      <!-- Card Three -->
      <div
        class="flex flex-col bg-white
         w-72 h-80 border-2 
         border-gray-200 transition 
         ease-in-out duration-150 delay-150 
         hover:cursor-pointer 
         hover:border-teal-300
         bg-primaryGreen 
          translate-y-0 hover:-translate-y-2 rounded-lg overflow-hidden shadow-lg"
      >
        <svg
          width="141"
          class="mx-auto my-auto scale-75"
          height="auto"
          viewBox="0 0 141 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 51">
            <path
              id="Vector"
              d="M122.028 16.538V28.317M122.028 39.07V75.312C122.028 81.89 116.646 87.273 110.067 87.273H34.68C28.102 87.273 22.719 81.891 22.719 75.312V16.538L122.028 39.07Z"
              stroke="#359F90"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              opacity="0.3"
              d="M125.272 5.5H85.523C85.472 4.5 83.948 1.5 82.083 1.5H62.134C60.269 1.5 58.745 4.5 58.694 5.5H18.945C16.424 5.5 14.062 6.502 14.062 8.952V10.191C14.062 12.641 16.424 15.5 18.945 15.5H125.272C127.793 15.5 129.062 12.64 129.062 10.191V8.952C129.062 6.502 127.793 5.5 125.272 5.5V5.5ZM80.085 9.5H64.461C63.192 9.5 62.154 8.769 62.154 7.5C62.154 6.231 63.192 5.5 64.461 5.5H80.084C81.353 5.5 82.391 6.231 82.391 7.5C82.392 8.769 81.354 9.5 80.085 9.5V9.5Z"
              fill="#59D8C6"
            />
            <path
              id="top"
              class="transition duration-150 
              delay-300 animate-bounce "
              d="M125.272 5H85.523C85.472 4 83.948 1 82.083 1H62.134C60.269 1 58.745 4 58.694 5H18.945C16.424 5 14.562 6.639 14.562 9.16V10.435C14.562 12.956 16.424 16 18.945 16H125.272C127.793 16 129.562 12.956 129.562 10.435V9.16C129.562 6.639 127.793 5 125.272 5V5Z"
              stroke="#0BCEB2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M6.243 28.4189V38.9049M1 33.6619H11.486M43.852 42.7859V49.0639M40.713 45.9249H46.991M98.985 30.5229V36.8009M102.124 33.6619H95.846M135.078 50.6059V61.0919M140.321 55.8489H129.835M72.385 87.2729L72.374 101.717M80.329 9.42489H64.216C63.6696 9.42331 63.1461 9.20555 62.7597 8.81919C62.3733 8.43284 62.1556 7.90928 62.154 7.36289V6.87389C62.154 5.73989 63.082 4.81189 64.216 4.81189H80.329C81.463 4.81189 82.392 5.73989 82.392 6.87389V7.36289C82.3902 7.90937 82.1722 8.43293 81.7857 8.81926C81.3992 9.20558 80.8755 9.42331 80.329 9.42489Z"
              stroke="#359F90"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_4"
              d="M72.3741 109.169C74.4319 109.169 76.1001 107.501 76.1001 105.443C76.1001 103.385 74.4319 101.717 72.3741 101.717C70.3163 101.717 68.6481 103.385 68.6481 105.443C68.6481 107.501 70.3163 109.169 72.3741 109.169Z"
              stroke="#359F90"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_5"
              d="M45.8361 66.478L68.8991 45.218M96.0201 58.524L118.946 37.391L96.0201 58.524ZM76.7711 45.837L88.0781 58.103L76.7711 45.837Z"
              stroke="#359F90"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_6"
              opacity="0.3"
              d="M123.598 39.1137C126.59 38.759 128.728 36.0463 128.373 33.0545C128.018 30.0627 125.306 27.9249 122.314 28.2795C119.322 28.6341 117.184 31.3469 117.539 34.3387C117.894 37.3305 120.606 39.4683 123.598 39.1137Z"
              fill="#59D8C6"
            />
            <path
              id="ball"
              d="M123.598 39.1137C126.59 38.759 128.728 36.0463 128.373 33.0545C128.018 30.0627 125.306 27.9249 122.314 28.2795C119.322 28.6341 117.184 31.3469 117.539 34.3387C117.894 37.3305 120.606 39.4683 123.598 39.1137Z"
              stroke="#359F90"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="ball_2"
              opacity="0.3"
              d="M92.4913 67.4638C95.4831 67.1091 97.6209 64.3964 97.2663 61.4046C96.9117 58.4128 94.1989 56.275 91.2071 56.6296C88.2153 56.9842 86.0775 59.697 86.4322 62.6888C86.7868 65.6806 89.4996 67.8184 92.4913 67.4638Z"
              fill="#59D8C6"
            />
            <path
              id="ball_3"
              d="M92.4913 67.4638C95.4831 67.1091 97.6209 64.3964 97.2663 61.4046C96.9117 58.4128 94.1989 56.275 91.2071 56.6296C88.2153 56.9842 86.0775 59.697 86.4322 62.6888C86.7868 65.6806 89.4996 67.8184 92.4913 67.4638Z"
              stroke="#359F90"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="ball_4">
              <path
                id="Vector_7"
                opacity="0.3"
                d="M73.7708 47.1923C76.7625 46.8377 78.9004 44.1249 78.5457 41.1331C78.1911 38.1413 75.4783 36.0035 72.4865 36.3581C69.4948 36.7128 67.3569 39.4256 67.7116 42.4173C68.0662 45.4091 70.779 47.5469 73.7708 47.1923Z"
                fill="#59D8C6"
              />
              <path
                id="Vector_8"
                d="M73.7708 47.1923C76.7625 46.8377 78.9004 44.1249 78.5457 41.1331C78.1911 38.1413 75.4783 36.0035 72.4865 36.3581C69.4948 36.7128 67.3569 39.4256 67.7116 42.4173C68.0662 45.4091 70.779 47.5469 73.7708 47.1923Z"
                stroke="#359F90"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g id="ball_5">
              <path
                id="Vector_9"
                opacity="0.3"
                d="M42.4668 75.5923C45.4586 75.2377 47.5964 72.5249 47.2418 69.5331C46.8871 66.5413 44.1744 64.4035 41.1826 64.7582C38.1908 65.1128 36.053 67.8256 36.4076 70.8173C36.7622 73.8091 39.475 75.9469 42.4668 75.5923Z"
                fill="#59D8C6"
              />
              <path
                id="Vector_10"
                d="M42.4668 75.5923C45.4586 75.2377 47.5964 72.5249 47.2418 69.5331C46.8871 66.5413 44.1744 64.4035 41.1826 64.7582C38.1908 65.1128 36.053 67.8256 36.4076 70.8173C36.7622 73.8091 39.475 75.9469 42.4668 75.5923Z"
                stroke="#359F90"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_11"
              opacity="0.3"
              d="M22.72 15.761H122.028V22.38H22.72V15.761Z"
              fill="#59D8C6"
            />
          </g>
        </svg>

        <div class="px-6 py-2">
          <div class="font-bold text-xl text-primaryDark mb-2">
            Analytics & Reports
          </div>
          <p class="text-primaryDark font-light text-base pb-4">
            Providing a simple of the data collected and
            whether the deployed locations are predominantly noise prone or not.
          </p>
        </div>
      </div>
    </div>

    <div>
      <!-- <img src="src/assets/opener-loading.gif" alt="this slowpoke moves"  width="250" /> -->
    </div>
  </div>
</template>

<script>
import TopNavigationVue from "./TopNavigation.vue";
export default {
  components: {
    TopNavigationVue,
  },
};
</script>

<style> 
.home {
  background: bottom/auto url("../assets/bg.svg") no-repeat;
  height:100vh !important;
}
</style> 
