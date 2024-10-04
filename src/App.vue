<template>
  <q-layout view="hHh LpR fFf">
    <HeaderSection />

    <q-page-container>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </q-page-container>

    <FooterSection />
  </q-layout>
</template>

<script setup lang="ts">
import HeaderSection from '@/components/layouts/HeaderSection.vue'
import FooterSection from '@/components/layouts/FooterSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
