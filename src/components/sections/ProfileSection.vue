<template>
  <q-section id="profile">
    <q-card flat class="text-center">
      <q-card-section horizontal>
        <q-card-section class="col-12 col-md-6 q-pa-lg content-section">
          <!-- Profile Text Content -->
          <div class="profile-text">
            <div class="text-subtitle1 q-mb-md">{{ profile.greeting }}</div>
            <h1 class="text-h2 q-my-none name">{{ profile.name }}</h1>
            <div class="text-h5 q-mt-sm q-mb-lg title">{{ profile.title }}</div>
          </div>
          
          <!-- Action Buttons -->
          <div class="actions q-gutter-lg items-center justify-center">
            <q-btn
              unelevated
              color="black"
              :label="profile.cv.label"
              icon="download"
              class="action-btn"
              @click="handleDownloadCV"
            />
            <q-btn
              outline
              color="black"
              label="Entre em contato"
              icon="mail"
              class="action-btn"
              @click="scrollToContact"
            />
          </div>
          
          <!-- Social Links -->
          <div class="social-links q-mt-lg items-center justify-center">
            <q-btn
              v-for="link in socialLinks"
              :key="link.name"
              flat
              round
              :color="link.color"
              :icon="link.icon"
              :href="link.url"
              target="_blank"
              :aria-label="link.name"
            >
              <q-tooltip>{{ link.name }}</q-tooltip>
            </q-btn>
          </div>
        </q-card-section>
        
        <!-- Profile Image -->
        <q-card-section class="col-12 col-md-6 image-section">
          <q-img
            src="@/assets/images/profile-pic.png"
            spinner-color="primary"
            class="profile-image"
          >
            <template v-slot:loading>
              <q-spinner-dots color="primary" />
            </template>
          </q-img>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { SocialConfig } from '@/types/social'
import { getSocialLinks } from '@/types/social'
import curriculum from '@/assets/images/raphaelcaires-cv.pdf'

interface Profile {
  name: string;
  title: string;
  greeting: string;
  cv: {
    url: string;
    label: string;
  };
}

const profile = ref<Profile>({
  name: 'Raphael Caires',
  title: 'Engenheiro de Software',
  greeting: "Olá, eu sou",
  cv: {
    url: curriculum,
    label: 'Download CV'
  }
});

// Configurações para links sociais
const socialConfigs: SocialConfig[] = [
  { platform: 'linkedin', username: 'raphaelcaires' },
  { platform: 'github', username: 'raphaelcaires' },
];

// Obtenha os links sociais a partir das configurações
const socialLinks = computed(() => getSocialLinks(socialConfigs));

const handleDownloadCV = () => {
  const link = document.createElement('a')
  link.href = profile.value.cv.url
  link.download = 'raphaelcaires-cv.pdf'
  link.click()
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style lang="sass" scoped>
#profile
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  padding: 2rem

.q-card
  max-width: 1200px
  width: 100%
  background: rgba(255, 255, 255, 0.9)
  backdrop-filter: blur(10px)

.content-section
  display: flex
  flex-direction: column
  justify-content: center

.profile-text
  .name 
    font-weight: 700
    background: #000000
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

  .title 
    color: #555555
    font-weight: 600

.text-subtitle1
  color: #555555
  font-weight: 600

.actions
  display: flex
  flex-wrap: wrap
  justify-content: center
  
  .action-btn 
    min-width: 250px
    border-radius: 2rem
    padding: 1rem 3rem

.social-links
  display: flex
  gap: 1rem
  
  .q-btn
    transition: transform 0.3s ease
    
    &:hover
      transform: translateY(-3px)
    
.image-section
  display: flex
  align-items: center
  justify-content: center
  padding: 2rem

.profile-image
  border-radius: 100rem
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1)
  transition: transform 0.3s ease
  max-width: 80%
  
  &:hover
    transform: scale(1.02)
    
@media (max-width: 768px)
  .q-card
    margin: 1rem

  .content-section
    text-align: center

  .actions
    justify-content: center

  .social-links
    justify-content: center

  .profile-image
    max-width: 70%
    margin: 0 auto
</style>
