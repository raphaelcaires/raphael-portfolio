<template>
  <q-header flat class="bg-white text-dark q-py-md">
    <q-toolbar>
      <q-toolbar-title class="text-weight-bold"> Raphael Caires </q-toolbar-title>

      <!-- Desktop Navigation -->
      <div class="gt-sm">
        <q-tabs inline-label>
          <q-route-tab
            v-for="item in menuItems"
            :key="item.label"
            :to="item.href"
            :label="item.label"
            @click.prevent="scrollToSection(item.href)"
          />
        </q-tabs>
      </div>

      <!-- Mobile Navigation -->
      <div class="lt-md">
        <q-btn flat round dense icon="menu" @click="toggleMenu">
          <q-menu v-model="isMenuOpen">
            <q-list>
              <q-item
                v-for="item in menuItems"
                :key="item.label"
                @click.prevent="scrollToSection(item.href)"
                clickable
                v-close-popup
              >
                <q-item-section>{{ item.label }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (href: string) => {
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="sass" scoped>
.q-header 
  border-bottom: 1px solid #eee
  
.q-toolbar
  max-width: 1200px
  margin: 0 auto
</style>
