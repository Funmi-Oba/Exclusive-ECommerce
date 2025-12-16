<template lang="">
  <div class="flex w-full h-screen mt-10">
    <div class="w-3/5 h-full">
      <img src="/images/Side Image.png" alt="" class="object-cover w-full h-full" />
    </div>
    <div class="flex items-center justify-center w-2/5 h-full px-20">
      <div class="w-full max-w-md">
        <h2 class="mb-2 text-2xl font-bold">Create an account</h2>
        <p class="mb-8 text-sm">Enter your details below</p>
        <form class="space-y-6">
          <div class="relative">
            <label class="absolute text-gray-400">Name</label>
            <input type="text" class="w-full pt-5 border-b border-gray-400 focus:outline-none" />
          </div>

          <div class="relative">
            <label class="absolute text-gray-400">Email or Phone Number</label>
            <input type="text" class="w-full pt-5 border-b border-gray-400 focus:outline-none" />
          </div>
          <div class="relative">
            <label class="absolute text-gray-400">Password</label>
            <input type="password" class="w-full pt-5 border-b border-gray-400 focus:outline-none" />
          </div>

          <button type="" class="bg-[#DB4444] text-white w-full py-3 rounded-md">
            Create Account
          </button>
          <button type="" class="flex items-center justify-center w-full gap-2 py-3 border border-gray-300 rounded-md">
            <img src="/icons/Google.png" alt="" class="w-5 h-5"/> <span> Sign up with Google</span>
          </button>
        </form>
        <p class="mt-6 text-center text-gray-600">
          Already have account?
          <router-link :to="{name: 'login'}" class="font-medium underline">Log in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
