<script>
    import finalBossWhiteLogo from '$lib/logos/F_Logo_White.png';
    import finalBossWhiteTextLogo from '$lib/logos/Text_Logo_White.png';
</script>
<main class="lg:h-screen md:pt-24" style="background: var(--dark-purple-gradient);">
    <!-- Top Logo -->
    <div id="logo" class="flex items-center relative right-4 mx-auto px-8 pt-12 md:py-8 h-auto w-11/12 md:w-5/6 lg:w-1/2">
        <img class="h-10 md:h-24" src="https://ik.imagekit.io/lgpq0vloy/logos/F_Logo_White.png?updatedAt=1721187101575" alt="Final Boss Studios White Logo" srcset="">
        <img class="h-10 md:h-12 relative right-4" src="https://ik.imagekit.io/lgpq0vloy/logos/Text_Logo_White.png?updatedAt=1721187101485" alt="Final Boss Studios White Logo" srcset="">
    </div>
    <!-- Info -->
    <div id="info" class="mx-auto p-4 rounded h-auto justify-center md:shadow-4xl w-11/12 md:w-5/6 lg:w-1/2 md:bg-white">
        <h1 class="text-md text-white pt-4 md:pt-0 border-t-2 md:border-none border-[var(--bg-light-gray)] md:text-black md:text-lg">
            <!-- Laptop Icon -->
            <span class="pr-2 border-r-2 border-[var(--red)]">
                &#128187;
            </span>
            <span class="text-[#dd0000]">
                Website Under Construction
            </span>
        </h1>
        <div class="mt-4 grid grid grid-rows-2 grid-flow-col gap-0 md:gap-2">
            <!-- Logo -->
            <div class="md:row-span-3 md:col-span-1">
                <div class="col-span-1 text-center">
                    <!-- Desktop -->
                    <div 
                    style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_2%20(2).png?updatedAt=1721968909845')"
                    class="hidden lg:block p-2 mr-2 h-32 w-32 rounded bg-no-repeat bg-cover text-black text-xs flex text-center items-center">
                    </div>

                    <!-- Mobile -->
                    <div 
                    style="background-image: url('https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_2%20(2).png?updatedAt=1721968909845')"
                    class="block lg:hidden mx-auto mt-4 h-60 w-60 rounded bg-no-repeat bg-cover text-black">
                    </div>
                    <img class="block lg:hidden w-full mt-4" src="https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_Logo_Draft_1%20(2).png?updatedAt=1721969242405" alt="Cosmic Collisions Text Logo">
                </div>
            </div>
            <!-- Text -->
            <div class="md:row-span-3 md:col-span-11">
                <p class="text-white md:text-sm md:text-black">
                    <img class="h-12 relative right-3" src="https://ik.imagekit.io/lgpq0vloy/Cosmic%20Collsions/Coz_TextLogo_Draft_2.png?updatedAt=1721969242402" alt="Cosmic Collisions Text Logo">
                    <br class="md:hidden">
                    Our first IP release. Get ready to shoot some aliens in space, in an AR environment!
                    Inspired by classics like Galaga and Space Invaders, we aim to add another dimension 
                    - and story - to the traditional space shooter.
                    <br>
                    <br>
                    <span class="text-xs text-[var(--red)] font-bold">Alpha Release -  June 2024</span>
                    <br>
                    <span class="text-xs text-[#999] font-bold">Platforms</span>
                    <br>
                    <ion-icon class="text-2xl text-[var(--green)] md:text-[var(--purple)]" name="logo-apple"></ion-icon>
                    <ion-icon class="text-2xl text-[var(--green)] md:text-[var(--purple)]" name="logo-android"></ion-icon>
                </p>
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
            transform: translateX(-20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    @keyframes fade-in-ver {
        0% {
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>