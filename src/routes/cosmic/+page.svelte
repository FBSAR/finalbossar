<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';

    onMount(() => {
      return;
    })

    let characters = [
      {
        name: 'Phoenix',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALL_E%202024-04-09%2021.17.57%20-%20In%20a%20universe%20where%20advanced%20technology%20and%20interstellar%20warfare%20collide,%20Captain%20Aurora%20_Phoenix_%20Cortez,%20known%20as%20The.jpg?updatedAt=1724391506445',
        title: 'CEO / Co-Founder / Software Developer',
        description: "Eddie Taliaferro is a driven entrepreneur, Founder and CEO of Final Boss Studios, a dynamic startup attempting to 'evolutionize' the world of gaming and interactive entertainment. With a diverse background as a Tech Educator for five years and extensive experience as a skilled software developer, Eddie combines his passion for technology and education to lead his team in creating innovative and immersive gaming experiences.",
      },
      {
        name: 'Riley',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1008.58.35-LieutenantRiley_MacGyver_McKayknownasTheEngineerstandsoutwiththeirred-themedengineeringgearembodyinginno-ezgif.com-webp-to-jpg-co.jpg?updatedAt=1724391506293',
        title: 'COO / Co-Founder / Game Developer',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      },
      {
        name: 'Johnny',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1009.02.32-CadetJohnny_Sparky_SparksknownasTheRookieembodiesthevibrantenergyanduntestedvalorofanewrecruit.Dressed-ezgif.com-webp-to-jpg-conv.jpg?updatedAt=1724391506509',
        title: 'COO / Co-Founder / Game Developer',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      },
      {
        name: 'Xylo',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1008.55.44-EnhancingXyloshumanlikenessfurthertheynowexhibitamorepronouncedblendofhumanandetherealavianfeatures.The-ezgif.com-webp-to-jpg-con.jpg?updatedAt=1724391506584',
        title: 'COO / Co-Founder / Game Developer',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      },
      {
        name: 'Wraith',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/85ce716b-cbed-4d90-b72c-981c6eecdedc.png?updatedAt=1724391761183',
        title: 'COO / Co-Founder / Game Developer',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      },
    ]
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
      class="w-full my-4" 
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
    <Button color="none" class="text-white text-md mt-2 w-full lg:w-40" style="background: var(--green-gradient);">Tester Sign Up</Button>
    </div>

  </div>

  <!-- Spacer -->
  <div class="h-12 lg:h-44"></div>

  <!-- Game Play Video -->
  <div class="flex flex-col md:flex-row mx-auto my-4 h-auto lg:h-40 w-11/12 lg:w-11/12 xl:w-10/12">
    <!-- Description -->
    <div class="w-full mb-5 lg:mr-6 md:w-1/2">
      <h1 class="text-3xl">Title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fugit dolor libero aspernatur laudantium quo nulla error reiciendis veniam, totam neque facere vero quisquam, saepe, voluptatum quam. Laborum, autem neque.</p>
    </div>
    <!-- Video -->
    <div class="mb-5 lg:mr-6 md:w-1/2">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video class="w-full border-2 border-[#ffcb0a]/60" controls autoplay muted>
        <source src="https://ik.imagekit.io/lgpq0vloy/FinalBossXR/Screen_Recording_20240806_200843_Cosmic%20Collisions.mp4?updatedAt=1722990197464" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    </div>
  </div>

  <!-- Spacer -->
  <div class="h-2 lg:h-32"></div>

  <!-- Characters -->
  <div class="mx-auto mt-8 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font text-3xl">Characters</h1>
  </div>
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-auto w-11/12 lg:w-11/12 xl:w-10/12"> 
    {#each characters as character}
        <div class="w-full my-2 lg:mx-1 rounded sm:w-1/2 lg:w-1/5 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
          <img 
            src={character.photo} 
            class="h-auto rounded mb-2" 
            alt="Flowbite Logo" 
          />
          <h1 class="text-2xl gold-header-text">{character.name}</h1>
          <p class="text-sm text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">{character.title}</p>
          <p class="text-sm">{character.description}</p>
        </div>
      {/each}
  </div>

  <!-- Spacer -->
  <div class="h-10 lg:h-32"></div>

  <!-- Lore -->
  <div class="flex flex-col md:flex-row mx-auto mt-2 h-auto lg:h-auto w-11/12 lg:w-11/12 xl:w-10/12"> 

    <!-- Photo -->
    <div class="w-full mb-5 lg:mr-6 md:w-1/2">
      <div class="bg-blue-800 h-96 bg-no-repeat bg-cover bg-center lg:bg-cover" style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Gemini_Generated_Image_3b4qfh3b4qfh3b4q%20(1).jpeg?updatedAt=1724392397795');">

      </div>
    </div>

    <!-- Text and Link -->
    <div class="w-full md:w-1/2">
      <h1 class="text-3xl jersey-font">Lore</h1>
      <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis velit quibusdam molestias perspiciatis quidem ad, doloremque iure rem beatae magni harum tempore pariatur incidunt hic, alias ipsum dicta amet.</p>
      <p class="my-2 font-bold">You're donation will support: </p>
      <ul class="ml-10 my-4" style="list-style: disc">
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
      </ul>
    </div>
    

  </div>

  <!-- Spacer -->
  <div class="h-10 lg:h-32"></div>

  <div class="mx-auto p-8 rounded shadow-lg text-center bg-white/10 border-2 border-[#ffcb0a]/40 w-11/12 lg:w-1/3">
    <p class="text-xl text-white">Want to donate to our KickStarter Campaign?</p>
    <Button color="none" class="text-black text-lg mt-6 w-full lg:w-40" style="background: var(--gold-gradient);">Contribute</Button>
  </div>

</main>
<style>

</style>
