<template>
  <section class="q-pa-md q-my-xl">
    <div class="row items-center q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-img
          src="./assets/profile-pic.png"
          spinner-color="white"
          style="height: 400px; max-width: 400px"
          class="rounded-borders"
        />
      </div>
      <div class="col-12 col-md-6 text-center">
        <div class="text-h6">Hello, I'm</div>
        <div class="text-h2 q-mb-md">John Doe</div>
        <div class="text-h5 q-mb-md">Frontend Developer</div>
        <div class="q-gutter-sm">
          <q-btn color="primary" label="Download CV" />
          <q-btn color="secondary" label="Contact Info" />
        </div>
        <div class="q-mt-md">
          <q-btn flat round color="primary" icon="fab fa-linkedin" type="a" href="https://linkedin.com/" target="_blank" />
          <q-btn flat round color="primary" icon="fab fa-github" type="a" href="https://github.com/" target="_blank" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>