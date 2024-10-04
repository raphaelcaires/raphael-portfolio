<template>
  <nav class="nav-container">
    <q-list class="row no-wrap justify-center q-gutter-md">
      <q-item
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        clickable
        v-ripple
      >
        <q-item-section>
          {{ item.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' }
];
</script>