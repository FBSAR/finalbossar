<script lang="ts">
    let founders = [
      {
        name: 'Eddie Taliaferro II',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/eddie.jpg?updatedAt=1724278131402',
        title: 'CEO / Co-Founder / Software Developer',
        description: "I am a driven entrepreneur, Founder and CEO of Final Boss Studios, a dynamic startup attempting to 'evolutionize' the world of gaming and interactive entertainment. With a diverse background as a Tech Educator for five years and extensive experience as a skilled software developer, I combine my passion for technology and education to lead my team in creating innovative and immersive gaming experiences.",
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
        description: "Experienced Executive with Entrepreneurial and Global Market Growth Experience.Proven, executive-level leadership experience across multiple sectors including Fortune 100 corporations, tech startups, venture capitals and research institutions.Excellent ability to foster solid working relationships with diverse constituencies including Board of Directors, cross-functional leadership teams, strategic partner organizations, universities and other key stakeholders",
      },
      {
        name: 'Tim Bates',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/tim_bates.jpeg?updatedAt=1724277860159',
        title: 'Tech Advisor',
        description: "Tim is a seasoned IT Professional with an inspiring, innovative thinking reputation. He is the Chief Technical Officer of Lenovo, a Fortune 500 company, and one of the top technology companies in the world. Tim brings a wealth of knowledge and success stories across security solutions, application development, virtual adoption, and infrastructure consulting. Tim is future-focused, leveraging next-gen technologies to exceed client expectations while maximizing productivity to deliver economic value to his partners. His previous experience with General Motors, Deloitte & Touché LLP, Price Waterhouse Coopers, Dow Chemical, the US Marshal’s Office, and the US Marine Corp enable Tim to draw upon 30 years of experience to solve the complex challenges facing large organizations today."
      },
      {
        name: 'Terrell Thomas',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/terrel_pic.png?updatedAt=1724277860626',
        title: 'Legal Advisor',
        description: "Terrell is a highly accomplished legal counsel with a diverse background rooted in a passion for law and entrepreneurship. Having obtained his education at the prestigious University of Michigan and University of Detroit Mercy, he embarked on a successful career practicing law. Beyond his legal expertise, Terrell's enterprising spirit led him to establish and operate businesses in the fitness and energy sectors. With a keen eye for emerging trends, Terrell also delves into the world of cryptocurrency, investing and actively engaging with the ever-evolving digital currency landscape. Through his multifaceted pursuits, Terrell combines his legal acumen, business acuity, and technological curiosity to provide comprehensive guidance and strategic counsel to his clients.",
      }
    ]
    let team = [
      {
        name: 'Aaron Goodson',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-aaron.png?updatedAt=1724277860357',
        title: 'Senior Software Developer',
        description: "Aaron passionate in many aspects of technology, whether it's programming, gaming, or just tinkering with computers. For me, it's always been exciting to learn about new technologies. My goal is to build my software development skills so that I can make great contributions to the world of technology.<br><br>Aaron has experience as a Backend Engineer & Instructor with the educational Non profit Journi, where we worked with Eddie on various classes and web development projects.",
      },
      {
        name: 'Richard Davis III',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/fbs-richard.png?updatedAt=1724277860494',
        title: 'Sound Design / 3D Modeling & Printing',
        description: "Richard Davis is a multi-talented creative professional at Final Boss. He specializes in 3D design using programs such as Blender, and also produces music and sound effects using Fruity Loops Studios. With years of experience in the industry, Richard is a highly skilled and valued member of the team. Originally from Detroit, Michigan, Richard now resides in Florida. He attended the Charlotte Technical Center to learn game development, and in his spare time, he enjoys indulging in a variety of hobbies, including music, gaming, paintball, 3D printing, and making YouTube videos.",
      },
      {
        name: 'Rowan Christerfield',
        photo: 'https://ik.imagekit.io/lgpq0vloy/Profile%20Pictures/rowan.png?updatedAt=1724278119089',
        title: 'Social Media Handler / Creative Writer',
        description: "",
      }
    ]
</script>
<main>

  <!-- Header -->
  <div class="mx-auto w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="jersey-font page-header green-header-text">ABOUT US</h1>
    <p class="sm:w-1/2 lg:w-1/2">Introducing the Final Boss team.</p>
  </div>

  <!-- Founders -->
  <div class="mx-auto my-4 w-11/12 lg:w-11/12 xl:w-10/12">
    <h1 class="text-white mb-2 mt-8 jersey-font text-2xl">Founders</h1>
    <div class="flex flex-wrap justify-start gap-2">
      {#each founders as founder}
        <div class="w-full rounded sm:w-1/2 lg:w-1/4 p-4 backdrop-blur-lg bg-white/10 border-white/20 border-2 text-white">
          <img 
            src={founder.photo} 
            class="h-auto rounded mb-2" 
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
            class="h-auto rounded mb-2" 
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
            class="h-auto rounded mb-2" 
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
