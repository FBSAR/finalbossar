<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge, FloatingLabelInput, Textarea, Toast } from 'flowbite-svelte';
  import { CheckCircleOutline, CloseCircleOutline } from 'flowbite-svelte-icons'
  import { enhance } from '$app/forms';

  // TailwindCSS Classes
  const inputClass = 'focus:bg-white/20 focus:border-2 focus:border-[#00FF00]';
  const successToastClass = 'w-full max-w-xl z-50 p-4 text-white text-3xl bg-black shadow dark:text-white dark:bg-black border-2 border-[#00ff00] rounded gap-3'
  const errorToastClass = 'w-full max-w-sm lg:max-w-xl z-50 p-4 text-white text-3xl bg-black shadow dark:text-white dark:bg-black border-2 border-[#dd0000] rounded gap-3'

  // Toasts
  let successToast = false;
  function showSuccessToast() {
    successToast = true;
    setTimeout(() => {
      successToast = false;
    }, 8000);
  }

  let errorToast = false;
  let errorToastMessage = '';
  function showErrorToast(message: string) {
    errorToastMessage = message;
    errorToast = true;
    setTimeout(() => {
      errorToast = false;
      errorToastMessage = '';
    }, 5000);
  }

  // Contact Form Submission
  let contactInfo = {
    name: '',
    email: '',
    message: '',
  }
  async function handleSubmit(event: SubmitEvent) {
    console.log('Attempting to Submit Form...');
    const form = event.currentTarget as HTMLFormElement; 

    try {
      // Check if User has filled out entire form
      if( contactInfo.name == '' || 
          contactInfo.email == '' || 
          contactInfo.message == '' ) 
        { return showErrorToast('Please fill out the entire form') }

        // Fetch Slack API Request
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form)   
        });

        // Success Response
        if (response.ok) {
          const data = await response.json();
          showSuccessToast();

          // Failure Response
        } else {
          console.error('Error submitting form:', response.status);
          showErrorToast('There was an error submitting your form. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showErrorToast('There was an error submitting your form. Please try again later.')
    }
  }
  
</script>
<main>
<!-- Header -->
<div class="mx-auto px-4 container">
  <h1 class="jersey-font page-header green-header-text">CONTACT US</h1>
  <p class="text-xs lg:text-lg sm:w-1/2 lg:w-1/2">
    Have a question? Have a comment? Want to work with, or invest in Final Boss?
    Please reach out, and we will contact you are our earliest convenience!
  </p>
  <Badge color="yellow">Please fill out entire form</Badge>
  <!-- Spacer -->
  <div class="h-4"></div>
   
  <!-- Form -->
  <div class="w-full lg:w-1/2 bg-white/10 p-4">
    <form method="POST" use:enhance on:submit|preventDefault={handleSubmit}>
      <FloatingLabelInput 
        maxlength="100"
        bind:value={contactInfo.name}
        name="name"
        classInput={inputClass}
        defaultClass={"mb-2 bg-red-900"} style="filled" type="text">
        First & Last Name
      </FloatingLabelInput>
      <!-- Spacer -->
      <div class="h-4"></div>
      <FloatingLabelInput
        maxlength="100"
        bind:value={contactInfo.email}
        name="email"
        classInput={inputClass}
        defaultClass={"mb-2"} style="filled" color="base" type="email">
        Email
      </FloatingLabelInput>

      <!-- Spacer -->
      <div class="h-4"></div>
      <Textarea 
        maxlength="500"
        bind:value={contactInfo.message}
        name="message"
        class={inputClass}
        placeholder="Your message" rows="6"  
      />
      <!--         style="background: var(--green-gradient);" 
 -->
      <button
        type="submit"
        disabled={contactInfo.name === '' || contactInfo.email === '' || contactInfo.message === '' }
        class="block w-full h-10 rounded text-white text-lg mt-2 disabled:opacity-50 disabled:bg-white/20 bg-[#0e9f0e] hover:bg-[var(--red)] duration-200">
          Submit
      </button>
    </form>
  </div>

  <!-- Toasts -->
  {#if successToast}
    <Toast 
      divClass={successToastClass} 
      contentClass={'w-full text-lg lg:text-2xl font-normal'} 
      dismissable={true} 
      align={true}>
        <span><CheckCircleOutline size="xl" color="#00ff00"></CheckCircleOutline></span>
        <span>Your message has been submitted! We will get back to you soon.</span>
    </Toast>
  {/if}
  {#if errorToast}
    <Toast 
      divClass={errorToastClass} 
      contentClass={'w-full text-lg lg:text-2xl font-normal'} 
      dismissable={true} 
      align={true}>
        <span><CloseCircleOutline size="xl" color="#dd0000"></CloseCircleOutline></span>
        <span>{errorToastMessage}</span>
    </Toast>
  {/if}
</div>
</main>
<style>

</style>
