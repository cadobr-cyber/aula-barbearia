<template>
  <section class="relative min-h-screen flex items-center overflow-hidden hero-bg">

    <!-- Gradiente overlay -->
    <div class="absolute inset-0 hero-gradient pointer-events-none" />

    <!-- Conteúdo -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16 py-24">

      <!-- Lado esquerdo: texto -->
      <div class="flex-1 flex flex-col items-start">

        <span class="inline-block text-xs font-semibold uppercase tracking-[0.35em] mb-6 px-4 py-2 rounded-full badge-label">
          Est. 2010 · Barbearia Premium
        </span>

        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 hero-title">
          Arte em<br />
          cada <span class="text-gold">corte</span>
        </h1>

        <p class="text-lg leading-relaxed mb-10 max-w-md hero-subtitle">
          Tradição, estilo e precisão em cada detalhe. Uma experiência única de barbearia que une o clássico ao moderno.
        </p>

        <!-- Botões -->
        <div class="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
          <BaseButton variant="primary" class="w-full sm:w-auto">Agendar Horário</BaseButton>
          <BaseButton variant="secondary" class="w-full sm:w-auto">Ver Serviços</BaseButton>
        </div>

        <!-- Stats -->
        <div class="flex gap-10">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
            <span class="text-3xl font-extrabold text-gold">{{ stat.value }}</span>
            <span class="text-xs uppercase tracking-widest hero-stat-label mt-1">{{ stat.label }}</span>
          </div>
        </div>

      </div>

      <!-- Lado direito: imagem -->
      <div class="flex-1 flex items-center justify-center w-full">
        <div class="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden image-frame">

          <img src="/images/barbeiro_50kb.jpg" alt="Barbeiro cortando o cabelo do cliente" class="w-full h-full object-cover" />

          <!-- Badge flutuante -->
          <div class="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-xl floating-badge">
            <p class="text-xs uppercase tracking-widest mb-1" style="color: #d4a017;">Atendimento</p>
            <p class="font-bold text-sm" style="color: #fdfaf5;">Seg – Sáb · 9h às 20h</p>
          </div>

        </div>
      </div>

    </div>

    <!-- Linha decorativa inferior -->
    <div class="absolute bottom-0 left-0 right-0 flex items-center px-16 pb-6 gap-4 z-10">
      <div class="flex-1 h-px" style="background-color: #3d2512;"></div>
      <span style="color: #d4a017; font-size: 10px;">✦</span>
      <div class="flex-1 h-px" style="background-color: #3d2512;"></div>
    </div>

  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/BaseButton.vue'

const stats = [
  { value: '15+', label: 'Anos de experiência' },
  { value: '2k+', label: 'Clientes satisfeitos' },
  { value: '5★',  label: 'Avaliação média' },
]
</script>

<style scoped>
.hero-bg {
  background-color: #0a0804;
}

.hero-gradient {
  background: radial-gradient(ellipse at 70% 50%, rgba(212, 160, 23, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 0% 100%, rgba(92, 55, 32, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, #111009 0%, #0a0804 50%, #1a0e06 100%);
}

.hero-title {
  color: #fdfaf5;
  font-family: 'Georgia', serif;
}

.text-gold {
  color: #d4a017;
}

.hero-subtitle {
  color: #deccaa;
}

.hero-stat-label {
  color: #9a6040;
}

.badge-label {
  background-color: rgba(212, 160, 23, 0.1);
  border: 1px solid rgba(212, 160, 23, 0.25);
  color: #d4a017;
}

.image-frame {
  border: 1px solid #3d2512;
  box-shadow: 0 0 60px rgba(212, 160, 23, 0.12), inset 0 0 40px rgba(0,0,0,0.4);
}

.floating-badge {
  background-color: rgba(26, 24, 18, 0.9);
  border: 1px solid #3d2512;
  backdrop-filter: blur(8px);
}
</style>
