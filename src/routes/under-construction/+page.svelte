<script>
    import finalBossWhiteLogo from '$lib/logos/F_Logo_White.png';
    import finalBossWhiteTextLogo from '$lib/logos/Text_Logo_White.png';
</script>
<main class="h-screen md:pt-24" style="background: var(--dark-purple-gradient);">
    <!-- Top Logo -->
    <div id="logo" class="flex items-center relative right-4 mx-auto px-8 pt-12 md:py-8 h-auto w-11/12 md:w-5/6 lg:w-1/2">
        <img class="h-10 md:h-24" src="https://ik.imagekit.io/lgpq0vloy/logos/F_Logo_White.png?updatedAt=1721187101575" alt="Final Boss Studios White Logo" srcset="">
        <img class="h-10 md:h-12 relative right-4" src="https://ik.imagekit.io/lgpq0vloy/logos/Text_Logo_White.png?updatedAt=1721187101485" alt="Final Boss Studios White Logo" srcset="">
    </div>
    <!-- Info -->
    <div id="info" class="mx-auto p-4 h-auto justify-center md:shadow-2xl w-11/12 md:w-5/6 lg:w-1/2 md:bg-white">
        <h1 class="text-md text-white uppercase pt-4 md:pt-0 border-t-2 md:border-none border-[var(--bg-light-gray)] md:text-black md:text-lg mb-4">
            <!-- Laptop Icon -->
            <span class="pr-2 border-r-2 border-[var(--red)]">
                &#128187;
            </span>
            Website Under Construction
        </h1>
        <div class="grid grid grid-rows-2 grid-flow-col gap-0 md:gap-2">
            <!-- Logo -->
            <div class="md:row-span-3 md:col-span-1">
                <div class="col-span-1">
                    <div class="bg-[var(--bg-light-gray)] text-black text-xs flex text-center items-center p-2 h-32 w-32">
                        Logo Coming Soon!
                    </div>
                </div>
            </div>
            <!-- Text -->
            <div class="md:row-span-3 md:col-span-11">
                <p class="text-white text-xs md:text-sm md:text-black">
                    <b class="text-3xl md:text-lg">Coming Soon</b>
                    <br>
                    <br class="md:hidden">
                    Cosmic Collisions, Our first IP release. Get ready to shoot some aliens in space, in an AR environment!
                    Inspired by classics like Galaga and Space Invaders, we aim to add another dimension 
                    - and story - to the traditional space shooter.
                    <br>
                    <br>
                    <span class="text-xs text-[var(--red)]">Alpha Release -  June 2024</span>
                    <br>
                    <span class="text-xs text-[#999]">Platforms</span>
                    <br>
                    <ion-icon class="text-xl text-[var(--green)] md:text-[var(--purple)]" name="logo-apple"></ion-icon>
                    <ion-icon class="text-xl text-[var(--green)] md:text-[var(--purple)]" name="logo-android"></ion-icon>
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