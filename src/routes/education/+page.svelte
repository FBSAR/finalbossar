<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';

    onMount(() => {
      return;
    })
</script>
<main>
  <!-- Header -->
  <div class="mx-auto container">
    <h1 class="jersey-font page-header green-header-text">EDUCATION</h1>
  </div>
  
  <!-- Content -->
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 container"> 
    
    <!-- Photo -->
    <div class="w-full mb-5 lg:mr-6 md:w-1/2">
      <div class="bg-blue-800 h-96 bg-no-repeat bg-cover bg-center" style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Photos/391395425_235596526167788_7364637716608463663_n.jpg?updatedAt=1724378540516');">

      </div>
    </div>
    
    <!-- Text and Link -->
    <div class="w-full md:w-1/2">
      <!-- Header -->
        <p class="text-xs lg:text-lg">Driven by a passion for education, our studio is crafting a comprehensive video game development course focused on Unreal Engine. This course will go beyond software skills, delving into the core principles of programming and design. Our commitment to education ignited in 2021 when our CEO partnered with the non-profit Journi to teach 
          <a href="https://youtu.be/YpltgM5oBSw?si=1kwnDEa2TyaVNXWD" class="underline text-[#00ff00]">
            Unreal Basecamp
          </a>, an inspiring program that introduced young minds to the exciting world of augmented reality game development.</p>
        <p class="text-xl text-white border-2 border-[#dd0000] bg-[#dd0000]/20 mt-4 p-3 rounded inline-block">
          Coming Soon 2025
        </p>
  </div>
</main>
<style>

</style>
