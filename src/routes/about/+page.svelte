<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
      return;
    })
</script>
<main>

  <!-- Header -->
  <div class="mx-auto w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="text-black text-5xl text-white jersey-font">ABOUT US</h1>
    <p class="sm:w-1/2 lg:w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis velit quibusdam molestias perspiciatis quidem ad, doloremque iure rem beatae magni harum tempore pariatur incidunt hic, alias ipsum dicta amet.</p>
  </div>

  <!-- Founders -->
  <div class="mx-auto my-4 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="text-white mb-2 mt-8 jersey-font text-md">Founders</h1>
    <div class="flex flex-wrap justify-start gap-2">
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/eddie.jpg?updatedAt=1724278131402" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Eddie Taliaferro II</h1>
        <p class="text-sm text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">CEO / Co-Founder / Software Developer</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-keith.jpg?updatedAt=1724277860597" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Keith Dunklin</h1>
        <p class="text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">COO / Co-Founder / Game Developer</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
    </div>
   </div>

  <!-- Team -->
  <div class="mx-auto my-4 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="text-white mb-2 mt-16 jersey-font text-md">Team</h1>
    <div class="flex flex-wrap justify-start gap-2">
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-aaron.png?updatedAt=1724277860357" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Aaron Goodson</h1>
        <p class="text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">Senior Software Developer</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-richard.png?updatedAt=1724277860494" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Richard Davis III</h1>
        <p class="text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">Sound Design / 3D Modeling & Printing</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/rowan.png?updatedAt=1724278119089" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Rowan Christerfield</h1>
        <p class="text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">Social Media Handler / Creative Writer</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
    </div>
  </div>

  <!-- Advisors -->
  <div class="mx-auto my-4 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1  class="text-white mb-2 mt-16 jersey-font text-md">Advisors</h1>
    <div class="flex flex-wrap justify-start gap-2">
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/ed_kim.jpeg?updatedAt=1724277860376" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Edward Kim</h1>
        <p class="text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">Business Advisor</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/tim_bates.jpeg?updatedAt=1724277860159" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Tim Bates</h1>
        <p class="text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">Tech Advisor</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
      <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/terrel_pic.png?updatedAt=1724277860626" 
          class="h-40 rounded mb-2" 
          alt="Flowbite Logo" 
        />
        <h1 class="text-2xl gold-header-text">Terrell Thomas</h1>
        <p class="text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">Legal Advisor</p>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis officiis labore dolore rem veritatis eum pariatur alias doloremque? Iste, ad sed tempore non in modi maxime illo necessitatibus. Repudiandae.</p>
      </div>
    </div>
  </div>

</main>
<style>

</style>
