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
    <h1 class="jersey-font page-header green-header-text">EDUCATION</h1>
  </div>
  
  <!-- Content -->
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-40 w-11/12 lg:w-11/12 xl:w-10/12"> 
    
    <!-- Photo -->
    <div class="w-full mb-5 lg:mr-6 md:w-1/2">
      <div class="bg-blue-800 h-96 bg-no-repeat bg-cover" style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Photos/391395425_235596526167788_7364637716608463663_n.jpg?updatedAt=1724378540516');">

      </div>
    </div>
    
    <!-- Text and Link -->
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
  </div>
</main>
<style>

</style>
