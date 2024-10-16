<template>
  <section id="contact" class="q-pa-lg">
    <div class="text-center q-mb-xl">
      <div class="text-subtitle1" style="color:#555555">Entre em</div>
      <h2 class="text-h3 q-my-none">Contato</h2>
    </div>

    <div class="row justify-center q-gutter-lg">
      <q-card 
        v-for="info in contactInfo"
        :key="info.title"
        flat
        bordered
        class="contact-card"
      >
        <q-card-section class="text-center">
          <q-icon :name="info.icon" size="2rem" color="black" />
          <div class="text-h6 q-mt-sm">{{ info.title }}</div>
          <a 
            :href="info.link"
            class="text-primary"
            target="_blank"
          >
            {{ info.value }}
          </a>
        </q-card-section>
      </q-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contactInfo = ref([
  {
    icon: 'email',
    title: 'Email',
    value: 'raphaelcaires@gmail.com',
    link: 'mailto:raphaelcaires@gmail.com'
  },
  {
    icon: 'fab fa-linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/dev-raphaelcaires',
    link: 'https://www.linkedin.com/in/dev-raphaelcaires/'
  }
]);
</script>

<style lang="sass" scoped>
#contact
  min-height: 80vh
  display: flex
  flex-direction: column
  justify-content: center
  padding-top: 10rem
  margin-bottom: 10rem

.contact-card 
  min-width: 300px
  border-radius: 2rem
</style>