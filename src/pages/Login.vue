<template lang="">
  <div class="flex w-full h-screen mt-10">
    <div class="w-3/5 h-full">
      <img src="/images/Side Image.png" alt="" class="object-cover w-full h-full" />
    </div>
    <div class="flex items-center justify-center w-2/5 h-full px-20">
      <div class="w-full max-w-md">
        <h2 class="mb-2 text-2xl font-bold">Log in to Exclusive</h2>
        <p class="mb-8 text-sm">Enter your details below</p>
        <form class="space-y-6">
          <div class="relative">
            <label class="absolute text-gray-400">Email or Phone Number</label>
            <input type="text" class="w-full pt-5 border-b border-gray-400 focus:outline-none" />
          </div>
          <div class="relative">
            <label class="absolute text-gray-400">Password</label>
            <input type="password" class="w-full pt-5 border-b border-gray-400 focus:outline-none" />
          </div>
          <div class="flex items-center justify-between">
          <button type="" class="bg-[#DB4444] text-white py-3 px-6 rounded-md cursor-pointer">Log In</button>
            <button type="" class="text-[#DB4444] cursor-pointer">Forget Password?</button>
          </div>

          
         
        </form>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
