<script lang="ts">
  import "../app.css";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>
<main>
  <Navbar class="fixed" color="light">
    <NavBrand href="/">
      <img 
        src="https://ik.imagekit.io/lgpq0vloy/logos/F_Logo_White.png?updatedAt=1721187101575" 
        class="me-3 h-9 sm:h-12" 
        alt="Flowbite Logo" />
    </NavBrand>
    <NavHamburger  />
    <NavUl >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/cosmic">Cosmic</NavLi>
      <NavLi href="/crowdfunding">Crowdfunding</NavLi>
      <NavLi href="/about">About Us</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>

  <main class="min-h-screen py-24" style="background: var(--dark-purple-gradient);">
    <slot></slot>
  </main>
</main>
<style>
    
</style>