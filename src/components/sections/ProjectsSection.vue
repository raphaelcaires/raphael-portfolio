<template>
  <section id="projects" class="q-pa-md">
    <div class="text-center q-mb-xl">
      <div class="text-subtitle1" style="color:#555555">Navegue pelos meus recentes</div>
      <h2 class="text-h3 q-my-none">Projetos</h2>
    </div>

    <div class="row q-col-gutter-xl">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="col-12 col-md-4"
      >
        <q-card flat bordered class="project-card text-center">
          <q-img
            :src="project.image"
            :alt="project.title"
            spinner-color="primary"
            style="width: 100%; height: 450px; object-fit: cover;"
          />

          <q-card-section>
            <div class="text-h6">{{ project.title }}</div>
            <p class="text-subtitle1">{{ project.description }}</p>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              flat
              color="black"
              label="Github"
              :href="project.githubUrl"
              target="_blank"
              icon="fab fa-github"
            />
            <q-btn
              flat
              color="black"
              label="Live Demo"
              :href="project.demoUrl"
              target="_blank"
              icon="launch"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from '@/types/project';

const projects = ref<Project[]>([
  {
    title: 'Aluracord GeekVerse',
    image: new URL('@/assets/images/project-1.png', import.meta.url).href,
    description: 'Um aplicativo de troca de mensagens em tempo real',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://demo.com/'
  },
  {
    title: 'Rocket.Q',
    image: new URL('@/assets/images/project-2.png', import.meta.url).href,
    description: 'Uma aplicação de interação através de perguntas',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://demo.com/'
  },
  {
    title: 'DevFood',
    image: new URL('@/assets/images/project-3.png', import.meta.url).href,
    description: 'Um site responsivo de restaurante',
    githubUrl: 'https://github.com/',
    demoUrl: 'https://demo.com/'
  }
]);
</script>

<style  lang="sass" scoped>
#projects
  padding-top: 14rem
  
.project-card
  border-radius: 2rem
</style>