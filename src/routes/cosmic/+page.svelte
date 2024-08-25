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
        title: 'The Captain',
        description: "A battle-hardened SSDF veteran, driven by the loss of her family in the alien attack. A brilliant tactician, she defends the solar system with unmatched skill, but her inner turmoil risks overwhelming her, as she battles between vengeance and hope.",
      },
      {
        name: 'Riley',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1008.58.35-LieutenantRiley_MacGyver_McKayknownasTheEngineerstandsoutwiththeirred-themedengineeringgearembodyinginno-ezgif.com-webp-to-jpg-co.jpg?updatedAt=1724391506293',
        title: 'The Engineer',
        description: "A young, improvisational genius who can turn scraps into solutions, from asteroid defenses to alien tech. Their rebellious nature and unconventional methods often clash with Phoenix's strict command, challenging them to find common ground and work as a team.",
      },
      {
        name: 'Johnny Sparks',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1009.02.32-CadetJohnny_Sparky_SparksknownasTheRookieembodiesthevibrantenergyanduntestedvalorofanewrecruit.Dressed-ezgif.com-webp-to-jpg-conv.jpg?updatedAt=1724391506509',
        title: 'The Rookie',
        description: "A newly minted graduate, Sparky is naive but full of courage and optimism. Despite their inexperience, they bring a fresh perspective and a contagious positive spirit, which could be the spark the resistance needs. An exceptional VR/AR gamer with a determination reminiscent of a young Leon Kennedy.",
      },
      {
        name: 'Xylo',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/DALLE2024-04-1008.55.44-EnhancingXyloshumanlikenessfurthertheynowexhibitamorepronouncedblendofhumanandetherealavianfeatures.The-ezgif.com-webp-to-jpg-con.jpg?updatedAt=1724391506584',
        title: 'The Alien',
        description: "An ethereal avian species with shimmering iridescent wings, hailing from a solar system bathed in twilight. With an innate grasp of astrophysics, Xylo navigates space with unmatched precision. Discovered after crash-landing on Earth, Xylo's gentle nature and otherworldly beauty quickly transformed initial fear into awe.",
      },
      {
        name: 'Wraith',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Characters/85ce716b-cbed-4d90-b72c-981c6eecdedc.png?updatedAt=1724391761183',
        title: 'The AI',
        description: "Wraith, once a counterpart to Reaper, remains loyal to humanity. Operating in the shadows, Wraith uses its cyber capabilities to protect the solar system, quietly neutralizing threats and countering Reaper's plans. A silent guardian, it provides vital intelligence to the SSDF, ensuring the galaxy's survival.",
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
      <h1 class="text-3xl">Demo</h1>
      <p>This demo was recorded in August 2024. Here you can just shoot space rocks. Right now we are working on modeling the enemy ships to focus on combat.</p>
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
      <p class="">In 2157, an alien force targets the Sun as a vital resource, intending to destroy each planet to eliminate resistance. Earth’s Solar System Defense Force (SSDF) discovers the enemy has destabilized the asteroid belt, threatening every planet. The SSDF must protect the solar system and its colonies to ensure survival, as the Sun is essential to all life.</p>
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
