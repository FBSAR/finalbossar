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
  <div class="mx-auto w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font page-header green-header-text">COSMIC COLLISIONS</h1>
  </div>

  <!-- Content -->
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 w-11/12 lg:w-11/12 xl:w-10/12"> 
    
    <!-- Photo -->
    <div class="w-full mb-5 lg:mr-6 md:w-1/4">
      <img 
      src="https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_2%20(2).png?updatedAt=1721968909845" 
      class="h-54 my-4" 
      alt="Cosmic Collisions Logo"
      >
    </div>
    
    <!-- Text and Link -->
    <div class="w-full md:w-3/4">
      <p class="text-white md:text-sm lg:text-lg md:text-white sm:w-1/2 lg:w-full">
        <span class="block">
            <br>                            
            <ion-icon class="text-2xl relative top-0.5 text-[var(--green)] md:text-[var(--green)]" name="logo-apple"></ion-icon>
            <ion-icon class="text-2xl relative top-0.5 text-[var(--green)] md:text-[var(--green)]" name="logo-android"></ion-icon>
            <span class="text-sm text-[#dd0000] font-bold ml-2">Demo Release -  Fall 2024</span>
        </span>
        <br class="md:hidden">
        Get ready to shoot some aliens and asteroids in space, in an AR environment!
        Inspired by classics like <b>Galaga</b> and <b>Space Invaders</b>, we aim to add another dimension 
        - and story - to the traditional space shooter. Join our heroes from the SSDF (Solar System Defense Force), as they protect the Earth, the Sun, and their neighbors from an oncoming enemy attack.
        <br>
        <br>
    </p>
    <Button color="none" class="text-white text-md mt-2" style="background: var(--green-gradient);">Tester Sign Up</Button>
    </div>

  </div>

  <!-- Spacer -->
  <div class="h-32"></div>

  <!-- Game Play Video -->
  <div class="mx-auto mt-8 w-11/12 lg:w-11/12 xl:w-10/12">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="w-full hidden md:block" controls autoplay muted>
      <source src="https://ik.imagekit.io/lgpq0vloy/FinalBossXR/Screen_Recording_20240806_200843_Cosmic%20Collisions.mp4?updatedAt=1722990197464" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- Characters -->
  <div class="mx-auto mt-8 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font text-xl">Characters</h1>
  </div>
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 w-11/12 lg:w-11/12 xl:w-10/12"> 
    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
     1
    </div>
    
    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
      2
    </div>

    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
     3
    </div>
    
    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
      4
    </div>

  </div>

  <!-- Enemies -->
  <div class="mx-auto mt-8 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font text-xl">Characters</h1>
  </div>
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 w-11/12 lg:w-11/12 xl:w-10/12"> 
    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
     1
    </div>
    
    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
      2
    </div>

    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
     3
    </div>
    
    <div class="w-full md:w-1/4 bg-blue-400 mx-2">
      4
    </div>

  </div>

</main>
<style>

</style>
