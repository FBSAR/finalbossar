<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { Label, Input, FloatingLabelInput, Helper, Textarea } from 'flowbite-svelte';

  onMount(() => {
    return;
  })
</script>
<main>
<!-- Header -->
<div class="mx-auto container">
  <h1 class="jersey-font page-header green-header-text">CONTACT US</h1>
  <p class="text-xs lg:text-xl sm:w-1/2 lg:w-1/2">Have a question? Have a comment? Want to work with, or invest in Final Boss? Please contact us: </p>
  <!-- Spacer -->
  <div class="h-4"></div>
   
  <!-- Form -->
  <div class="w-full lg:w-1/2">
    <FloatingLabelInput defaultClass={"mb-2"} style="filled" color="base" type="text">
      Name
    </FloatingLabelInput>
    <!-- Spacer -->
    <div class="h-4"></div>
    <FloatingLabelInput defaultClass={"mb-2"} style="filled" color="base" type="text">
      Email
    </FloatingLabelInput>
    <!-- Spacer -->
    <div class="h-4"></div>
    <Textarea placeholder="Your message" rows="4" name="message" />
    <p class="pt-2 opacity-50">
      We will contact you are our earliest convenience.
    </p>
  </div>
</div>
</main>
<style>

</style>
