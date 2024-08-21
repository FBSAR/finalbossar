<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup  } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname;
  const nonActiveNavLink = 'text-[#fff]/60 duration-100 raleway';
  const activeNavLink = 'text-[#00c400] font-bold duration-100 raleway-700';
</script>
<main>
  <Navbar class="fixed w-full top-0 z-50 backdrop-blur-lg bg-[#1b023d]/80 shadow-md" color="none">
      <NavBrand href="/">
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/logos/F_Logo_White.png?updatedAt=1721187101575" 
          class="h-9 sm:h-12" 
          alt="Flowbite Logo" />
        <img 
          src="https://ik.imagekit.io/lgpq0vloy/logos/Text_Logo_White.png?updatedAt=1721187101565" 
          class="h-6 sm:h-7" 
          alt="Flowbite Logo" />
      </NavBrand>
      <NavHamburger menuClass={'text-white'}  />
      <NavUl {activeUrl}>
        <NavLi href="/" active={true} activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>HOME</NavLi>
        <NavLi href="/cosmic" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>COSMIC</NavLi>
        <NavLi href="/crowdfunding" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>CROWDFUNDING</NavLi>
        <NavLi href="/about" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>ABOUT US</NavLi>
        <NavLi href="/contact" active={true}  activeClass={activeNavLink} nonActiveClass={nonActiveNavLink}>CONTACT</NavLi>
      </NavUl>
  </Navbar>

  <main class="min-h-screen py-20 lg:py-24" style="background: var(--dark-purple-gradient);">
    <slot></slot>
  </main>

  <Footer class="h-20 bg-black p-10">
    <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="Final Boss Studios" year={2021} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
    </FooterLinkGroup>
    </div>
  </Footer>

</main>
<style>
    
</style>