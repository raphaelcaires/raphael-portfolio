<template>
  <q-layout view="hHh LpR fFf">
    <HeaderSection />

    <q-page-container>
      <q-page class="q-px-xl">
        <ProfileSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </q-page>
    </q-page-container>

    <FooterSection />
  </q-layout>
</template>

<script setup lang="ts">
import HeaderSection from '@/layouts/HeaderSection.vue'
import FooterSection from '@/layouts/FooterSection.vue'
import ProfileSection from '@/components/sections/ProfileSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style lang="sass">
.q-layout 
  max-width: 2000px
  margin: 0 auto
  padding: 0 5rem

  @media (max-width: 1024px)
    padding: 0 3rem

  @media (max-width: 600px)
    padding: 0 1rem
</style>
