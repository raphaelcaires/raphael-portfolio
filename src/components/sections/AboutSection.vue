<template>
  <section id="about" class="about-section q-pa-lg">
    <div class="text-center q-mb-xl">
      <div class="text-subtitle1" style="color:#555555">Saiba mais</div>
      <h2 class="text-h3 q-my-none">Sobre mim</h2>
    </div>

    <div class="row items-center">
      <div class="col-12 col-md-5" style="padding: 5rem;">
        <q-img
          src="../../assets/images/about-pic.png"
          spinner-color="primary"
          class="rounded-borders"
          style="width: 100%;"
        />
      </div>

      <div class="col-12 col-md-7">
        <div class="row q-col-gutter-md q-mb-lg">
          <div 
            v-for="detail in details" 
            :key="detail.title"
            class="col-12 col-sm-6"
          >
            <q-card flat bordered class="q-pa-lg">
              <q-card-section>
                <div class="text-center q-gutter-sm">
                  <q-icon :name="detail.icon" size="md" color="black" />
                  <div>
                    <div class="text-h6">{{ detail.title }}</div>
                    <div class="text-subtitle2">{{ detail.description }}</div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <p class="text-body1">
          Atuo como Engenheiro de Software Pleno na Dynaton, onde minha experiência abrange a coleta, processamento,
          armazenamento e análise de dados para serviços de inteligência de mercado e marketing digital. Tenho um histórico
          sólido de trabalho com uma ampla gama de tecnologias, incluindo JavaScript, HTML, CSS, VueJS, NodeJS, Python, Flask,
          JWT, Streamlit, PostgreSQL, GitHub Actions, AWS, Snowplow, sistemas de trackeamento, desenvolvimento de APIs e sistemas web.
        </p>
        <p class="text-body1">
          Sou movido pela curiosidade e pela paixão por tecnologia. Estou sempre em busca de aprendizado contínuo e vejo os
          desafios como oportunidades para desenvolver soluções inovadoras e eficazes. Meu objetivo é utilizar minha paixão por
          tecnologia e aprendizado para impulsionar o sucesso da equipe e contribuir com soluções que agreguem valor.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const details = ref([
  {
    icon: 'work',
    title: 'Experiência',
    description: '4+ anos desenvolvimento de softwares'
  },
  {
    icon: 'school',
    title: 'Formação Acadêmica',
    description: 'Engenharia de Computação'
  }
]);
</script>

<style lang="scss" scoped>
.q-img {
  border-radius: 2rem;
}
.q-card {
  border-radius: 2rem;
}
</style>