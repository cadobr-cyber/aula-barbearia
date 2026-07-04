<template>
  <section class="services-bg py-24 px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">

      <!-- Cabeçalho -->
      <div class="flex flex-col items-center text-center mb-14">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.35em] mb-6 px-4 py-2 rounded-full badge-label">
          O que fazemos
        </span>
        <h2 class="text-4xl lg:text-5xl font-extrabold leading-tight section-title">
          Nossos <span class="text-gold">Cortes</span>
        </h2>
        <p class="mt-4 text-base max-w-md section-subtitle">
          Escolha o estilo que combina com você. Nossos barbeiros fazem questão de cada detalhe.
        </p>
      </div>

      <!-- Grid de cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          v-for="service in services"
          :key="service.name"
          :name="service.name"
          :image="service.image"
          :price="service.price"
        />
      </div>

    </div>

    <!-- Divisor -->
    <div class="flex items-center gap-4 mt-24 max-w-7xl mx-auto">
      <div class="flex-1 h-px" style="background-color: #3d2512;"></div>
      <span style="color: #d4a017; font-size: 10px;">✦</span>
      <div class="flex-1 h-px" style="background-color: #3d2512;"></div>
    </div>

  </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'

const services = [
  { name: 'Degradê',    image: '/images/degrade.png',   price: 'R$ 45,00' },
  { name: 'Low Fade',   image: '/images/low fade.png',  price: 'R$ 50,00' },
  { name: 'Moicano',    image: '/images/moicano.png',   price: 'R$ 55,00' },
  { name: 'Pompadour',  image: '/images/pompadour.png', price: 'R$ 60,00' },
  { name: 'Social',     image: '/images/social.png',    price: 'R$ 40,00' },
  { name: 'Tesoura',    image: '/images/tesoura.png',   price: 'R$ 50,00' },
]
</script>

<style scoped>
.services-bg {
  background-color: #0a0804;
}

.section-title {
  color: #fdfaf5;
  font-family: 'Georgia', serif;
}

.text-gold {
  color: #d4a017;
}

.section-subtitle {
  color: #deccaa;
}

.badge-label {
  background-color: rgba(212, 160, 23, 0.1);
  border: 1px solid rgba(212, 160, 23, 0.25);
  color: #d4a017;
}
</style>
