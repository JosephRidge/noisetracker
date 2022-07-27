<template>
  <TopNavigationVue :home="true" />
  <div class="bg-gray-50 h-screen">
    <!-- Topic -->
    <div class="text-4xl font-bold my-1">écouté</div>
    <!-- Solution Description  -->
    <div class="text-2xl font-light">
      Enabling optimal urban location planning through tracking and mitigatio of
      noise pollution prone locations. Using highly intelligent IoT systemms and
      cloud platforms.
    </div>

    <!--  Journey Flow Cards -->
    <div class="flex items-center mx-auto my-10">
      <!-- Card one -->
      <div
        class="flex flex-col w-72 h-80 border-2 border-gray-200 transition ease-in-out duration-150 delay-150 hover:cursor-pointer hover:border-primaryPurple translate-y-0 hover:-translate-y-2 rounded-lg overflow-hidden shadow-lg"
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
        class="flex flex-col border-2 border-gray-200 transition ease-in-out duration-150 delay-150 hover:border-primaryPurple translate-y-0 hover:-translate-y-2 w-72 h-80 mx-auto hover:cursor-pointer rounded-lg overflow-hidden shadow-lg"
      >
        <img
          class="w-40 mx-auto px-3 p-2 transition ease-in-out"
          src="src/assets/finger-print-lock-success.gif"
          alt="Sunset in the mountains"
        />
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
        class="flex flex-col w-72 h-80 border-2 border-gray-200 transition ease-in-out duration-150 delay-150 hover:cursor-pointer hover:border-primaryPurple translate-y-0 hover:-translate-y-2 rounded-lg overflow-hidden shadow-lg"
      >
        <img
          class="w-40 mx-auto px-3 p-2 transition ease-in-out"
          src="src/assets/finger-print-lock-success.gif"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-2">
          <div class="font-bold text-xl text-primaryDark mb-2">
            Analytics & Reports
          </div>
          <p class="text-primaryDark font-light text-base pb-4">
            Providing a simple yet complex summary of the data collected and
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

<style></style>
