<script>
   import { Button } from 'flowbite-svelte';
    function testerLink() {
        window.open('https://forms.gle/SWN4pGnP4crNx78e7', '_blank');
    }
</script>
<main class="lg:h-screen md:pt-16" style="background: var(--dark-purple-gradient);">
    <!-- Info -->
    <div id="info" class="mx-auto p-5 rounded h-auto justify-center md:shadow-4xl w-11/12 md:w-5/6 lg:w-1/2 md:bg-[#FFFFFF05]">
        <div class="mt-4 grid grid grid-rows-2 grid-flow-col gap-0 md:gap-2">
                <div class="md:row-span-3 md:col-span-1">
                    <div class="col-span-1 text-center">
                        <div 
                        style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_2%20(2).png?updatedAt=1721968909845')"
                        class="hidden lg:block p-2 mr-2 h-32 w-32 rounded bg-no-repeat bg-cover text-black text-xs flex text-center items-center">
                        </div>
    
                        <div 
                        style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_2%20(2).png?updatedAt=1721968909845')"
                        class="block lg:hidden mx-auto mt-4 h-60 w-60 rounded bg-no-repeat bg-cover text-black">
                        </div>
                        <img class="block lg:hidden w-full mt-4" src="https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_1%20(2).png?updatedAt=1721969242405" alt="Cosmic Collisions Text Logo">
                    </div>
                </div>
                <div class="md:row-span-3 md:col-span-11">
                    <!-- svelte-ignore a11y-media-has-caption -->
                    <video class="w-full block md:hidden relative bottom-12" controls autoplay muted>
                        <source src="https://ik.imagekit.io/lgpq0vloy/FinalBossXR/Screen_Recording_20240806_200843_Cosmic%20Collisions.mp4?updatedAt=1722990197464" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div>
                        <img class="hidden md:inline h-12 relative right-3" src="https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_1%20(2).png?updatedAt=1721969242405" alt="Cosmic Collisions Text Logo">
                        <Button on:click={testerLink} class="hidden md:inline float-right bg-[var(--purple)] hover:bg-[var(--red)] duration-200">Tester Waitlist</Button>
                    </div>
                    <p class="text-white md:text-sm md:text-white">
                        <span class="block">
                            <br>                            
                            <ion-icon class="text-xl relative top-0.5 text-[var(--green)] md:text-[var(--green)]" name="logo-apple"></ion-icon>
                            <ion-icon class="text-xl relative top-0.5 text-[var(--green)] md:text-[var(--green)]" name="logo-android"></ion-icon>
                            <span class="text-xs text-[var(--red)] font-bold ml-2">Demo Release -  Fall 2024</span>
                        </span>
                        <br class="md:hidden">
                        Get ready to shoot some aliens and asteroids in space, in an AR environment!
                        Inspired by classics like <b>Galaga</b> and <b>Space Invaders</b>, we aim to add another dimension 
                        - and story - to the traditional space shooter. Join our heroes from the SSDF (Solar System Defense Force), as they protect the Earth, the Sun, and their neighbors from an oncoming enemy attack.
                        <br>
                        <br>
                    </p>
                    <Button on:click={testerLink} class="block w-full md:hidden float-right bg-[var(--purple)] hover:bg-[var(--red)] duration-200">Tester Waitlist</Button>
                </div>
        </div>
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="w-full hidden md:block" controls autoplay muted>
            <source src="https://ik.imagekit.io/lgpq0vloy/FinalBossXR/Screen_Recording_20240806_200843_Cosmic%20Collisions.mp4?updatedAt=1722990197464" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <!-- Bottom Info Bar -->
        <div class="hidden md:flex">
            <div class="flex-1">
                    <!-- Under Construction -->
                    <div class="mx-auto mt-4 w-full">
                        <h1 class="text-md text-white py-4 md:pt-0 border-t-2 md:border-none border-[var(--bg-light-gray)] md:text-black md:text-lg">
                            <span class="pr-2 border-r-2 border-[var(--red)]">
                                &#128187;
                            </span>
                            <span class="text-[#999] text-xs">
                                Website Under Construction
                                <br>
                                Contact: admin@finalbossar.com
                            </span>
                        </h1>
                    </div>
            </div>
            <div class="flex-1">
                    <div id="logo" class="float-right mt-4">
                        <img class="h-10 md:h-8 inline-block relative left-3" src="https://ik.imagekit.io/lgpq0vloy/logos/F_Logo_White.png?updatedAt=1721187101575" alt="Final Boss Studios White Logo" srcset="">
                        <img class="h-10 md:h-5 inline-block" src="https://ik.imagekit.io/lgpq0vloy/logos/Text_Logo_White.png?updatedAt=1721187101485" alt="Final Boss Studios White Logo" srcset="">
                    </div>
            </div>
        </div>

        <div class="flex md:hidden">
            <div class="flex-1">
                <!-- Under Construction -->
                <div class="mx-auto mt-4 w-full">
                    <h1 class="text-md text-white py-4 md:pt-0 border-t-2 md:border-none border-[var(--bg-light-gray)] md:text-black md:text-lg">
                        <span class="pr-2 border-r-2 border-[var(--red)]">
                            &#128187;
                        </span>
                        <span class="text-[#999] text-xs">
                            Website Under Construction
                            <br>
                            Contact: admin@finalbossar.com
                        </span>
                    </h1>

                <div id="logo" class="my-16 text-center">
                    <img class="h-16 inline-block mx-auto my-2" src="https://ik.imagekit.io/lgpq0vloy/logos/F_Logo_White.png?updatedAt=1721187101575" alt="Final Boss Studios White Logo" srcset="">
                    <img class="h-10 inline-block" src="https://ik.imagekit.io/lgpq0vloy/logos/Text_Logo_White.png?updatedAt=1721187101485" alt="Final Boss Studios White Logo" srcset="">
                </div>
            </div>
        </div>
        </div>
    </div>
</main>
<style>
    #logo {
        opacity: 0;
        animation: fade-in-hor 600ms ease 500ms forwards;
    }
    #info {
        opacity: 0;
        animation: fade-in-ver 600ms ease 1000ms forwards;
    }
    @keyframes fade-in-hor {
        0% {
            transform: translateX(-1.25rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0rem);
        }
    }
    @keyframes fade-in-ver {
        0% {
            transform: translateY(1.25rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0rem);
        }
    }
</style>