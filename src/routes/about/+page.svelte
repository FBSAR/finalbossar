<script lang="ts">
    let founders = [
      {
        name: 'Eddie Taliaferro II',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/eddie.jpg?updatedAt=1724278131402',
        title: 'CEO / Co-Founder / Software Developer',
        description: "Eddie Taliaferro is a driven entrepreneur, Founder and CEO of Final Boss Studios, a dynamic startup attempting to 'evolutionize' the world of gaming and interactive entertainment. With a diverse background as a Tech Educator for five years and extensive experience as a skilled software developer, Eddie combines his passion for technology and education to lead his team in creating innovative and immersive gaming experiences.",
      },
      {
        name: 'Keith Dunklin',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-keith.jpg?updatedAt=1724277860597',
        title: 'COO / Co-Founder / Game Developer',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      }
    ]
    let advisors = [
      {
        name: 'Edward Kim',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/ed_kim.jpeg?updatedAt=1724277860376',
        title: 'Business Advisor',
        description: "Eddie Taliaferro is a driven entrepreneur, Founder and CEO of Final Boss Studios, a dynamic startup attempting to 'evolutionize' the world of gaming and interactive entertainment. With a diverse background as a Tech Educator for five years and extensive experience as a skilled software developer, Eddie combines his passion for technology and education to lead his team in creating innovative and immersive gaming experiences.",
      },
      {
        name: 'Tim Bates',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/tim_bates.jpeg?updatedAt=1724277860159',
        title: 'Tech Advisor',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      },
      {
        name: 'Terrell Thomas',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/terrel_pic.png?updatedAt=1724277860626',
        title: 'Legal Advisor',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      }
    ]
    let team = [
      {
        name: 'Aaron Goodson',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-aaron.png?updatedAt=1724277860357',
        title: 'Senior Software Developer',
        description: "Eddie Taliaferro is a driven entrepreneur, Founder and CEO of Final Boss Studios, a dynamic startup attempting to 'evolutionize' the world of gaming and interactive entertainment. With a diverse background as a Tech Educator for five years and extensive experience as a skilled software developer, Eddie combines his passion for technology and education to lead his team in creating innovative and immersive gaming experiences.",
      },
      {
        name: 'Richard Davis III',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-richard.png?updatedAt=1724277860494',
        title: 'Sound Design / 3D Modeling & Printing',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      },
      {
        name: 'Rowan Christerfield',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/rowan.png?updatedAt=1724278119089',
        title: 'Social Media Handler / Creative Writer',
        description: "As COO and co-founder of Final Boss Studios, I lead the charge in delivering innovative AR gaming experiences. With over a decade in software development, I guide our team's efforts from concept to launch, ensuring quality and creativity. Alongside this, I co-own an industrial maintenance recruiting company, blending my passion for technology and business into impactful ventures.",
      }
    ]
</script>
<main>

  <!-- Header -->
  <div class="mx-auto w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="text-black text-white jersey-font page-header">ABOUT US</h1>
    <p class="sm:w-1/2 lg:w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis velit quibusdam molestias perspiciatis quidem ad, doloremque iure rem beatae magni harum tempore pariatur incidunt hic, alias ipsum dicta amet.</p>
  </div>

  <!-- Founders -->
  <div class="mx-auto my-4 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="text-white mb-2 mt-8 jersey-font text-2xl">Founders</h1>
    <div class="flex flex-wrap justify-start gap-2">
      {#each founders as founder}
        <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
          <img 
            src={founder.photo} 
            class="h-40 rounded mb-2" 
            alt="Flowbite Logo" 
          />
          <h1 class="text-2xl gold-header-text">{founder.name}</h1>
          <p class="text-sm text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">{founder.title}</p>
          <p class="text-sm">{founder.description}</p>
        </div>
      {/each}
    </div>
   </div>

  <!-- Team -->
  <div class="mx-auto my-4 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="text-white mb-2 mt-16 jersey-font text-2xl">Team</h1>
    <div class="flex flex-wrap justify-start gap-2">
      {#each team as member}
        <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
          <img 
            src={member.photo} 
            class="h-40 rounded mb-2" 
            alt="Flowbite Logo" 
          />
          <h1 class="text-2xl gold-header-text">{member.name}</h1>
          <p class="text-sm text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">{member.title}</p>
          <p class="text-sm">{member.description}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Advisors -->
  <div class="mx-auto my-4 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1  class="text-white mb-2 mt-16 jersey-font text-2xl">Advisors</h1>
    <div class="flex flex-wrap justify-start gap-2">
      {#each advisors as advisor}
        <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
          <img 
            src={advisor.photo} 
            class="h-40 rounded mb-2" 
            alt="Flowbite Logo" 
          />
          <h1 class="text-2xl gold-header-text">{advisor.name}</h1>
          <p class="text-sm text-sm font-bold border-b-2 border-gray-200/30 pb-1 mb-2">{advisor.title}</p>
          <p class="text-sm">{advisor.description}</p>
        </div>
      {/each}
    </div>
  </div>

</main>
<style>

</style>
