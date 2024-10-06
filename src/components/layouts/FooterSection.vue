<template>
  <q-footer bordered class="bg-white text-dark">
    <div class="footer-content q-pa-md">
      <!-- <div class="row justify-center q-mb-md">
        <q-tabs>
          <q-route-tab 
            v-for="item in ['Sobre', 'Experiência', 'Projetos', 'Contato']"
            :key="item"
            :to="'#' + item.toLowerCase()"
            :label="item"
          />
        </q-tabs>
      </div> -->
      <div class="text-center text-caption">
        Copyright © {{ new Date().getFullYear() }} Raphael Caires 👾.
      </div>
    </div>
  </q-footer>
</template>

<style lang="scss" scoped>
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>