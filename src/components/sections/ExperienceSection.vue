<template>
  <section id="experience" class="experience-section q-pa-lg">
    <div class="text-center q-mb-lg">
      <div class="text-subtitle1">Conheça minhas</div>
      <div class="text-h3">Habilidades</div>
    </div>
    
    <div class="row q-col-gutter-md">
      <div v-for="(section, index) in sections" 
          :key="index" 
          class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">
              {{ section.title }}
            </div>
            
            <div class="row q-col-gutter-sm q-mt-md">
              <div v-for="skill in section.skills" 
                  :key="skill.name" 
                  class="col-12 col-sm-6">
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="check_circle" color="positive" />
                  </q-item-section>
                  
                  <q-item-section>
                    <q-item-label>{{ skill.name }}</q-item-label>
                    <q-item-label caption>{{ skill.level }}</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ExperienceSection, Skill } from '@/types/experience'

const frontendSkills = ref<Skill[]>([
  {
    name: 'JavaScript',
    level: 'Avançado',
    icon: 'javascript'
  },
  {
    name: 'VueJS',
    level: 'Avançado',
    icon: 'javascript'
  },
  {
    name: 'HTML',
    level: 'Avançado',
    icon: 'html'
  },
  {
    name: 'CSS',
    level: 'Avançado',
    icon: 'css'
  },
  // Add more skills
])

const backendSkills = ref<Skill[]>([
  {
    name: 'NodeJS',
    level: 'Intermediário',
    icon: 'nodejs'
  },
  {
    name: 'NestJS',
    level: 'Iniciante',
    icon: 'express'
  },
  {
    name: 'Express',
    level: 'Intermediário',
    icon: 'express'
  },
  {
    name: 'PostgreSQL',
    level: 'Avançado',
    icon: 'express'
  },
  // Add more skills
])

const sections = ref<ExperienceSection[]>([
  {
    title: 'Frontend',
    skills: frontendSkills.value
  },
  {
    title: 'Backend',
    skills: backendSkills.value
  }
])
</script>

<style lang="scss" scoped>
.experience-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>