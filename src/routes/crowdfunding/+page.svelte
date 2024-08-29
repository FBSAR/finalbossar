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
    <h1 class="jersey-font page-header green-header-text">CROWDFUNDING</h1>
    <p class="ext-xs lg:text-xl sm:w-1/2 lg:w-1/2">This fall, Final Boss will launch its first crowdfunding campaign to support its business operations. The funds raised will contribute to the upcoming release of Cosmic, marketing efforts, and the purchase of new equipment for both our Game Development and Education departments. </p>
    <img class="h-32" src="https://ik.imagekit.io/lgpq0vloy/logos/Kickstarter-Logo.png?updatedAt=1724604584415" alt="KickStarter">
    <p class="text-xl text-white border-2 border-[#dd0000] bg-[#dd0000]/20 p-3 rounded inline-block">
      Coming Soon
    </p>
  </div>

  <!-- Header Old -->
  <!-- <div class="mx-auto container">
    <h1 class="jersey-font page-header green-header-text">CROWDFUNDING</h1>
  </div> -->
  
  <!-- Content Old -->
  <!-- <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 container"> 
    <div class="w-full mb-5 lg:mr-6 md:w-1/2">
      <div class="bg-blue-800 h-96 bg-no-repeat bg-cover" style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Photos/IMG_1089.HEIC?updatedAt=1724374412276');">

      </div>
    </div>
    
    <div class="w-full md:w-1/2">
      <h1 class="text-4xl jersey-font">Title</h1>
      <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis velit quibusdam molestias perspiciatis quidem ad, doloremque iure rem beatae magni harum tempore pariatur incidunt hic, alias ipsum dicta amet.</p>
      <p class="my-2 font-bold">You're donation will support: </p>
      <ul class="ml-10 my-4" style="list-style: disc">
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
      </ul>
      <Button color="none" class="text-white text-md mt-2" style="background: var(--green-gradient);">Donate Now</Button>
    </div>

  </div> -->
</main>
<style>

</style>
