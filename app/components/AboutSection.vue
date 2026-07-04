<template>
  <section class="about-bg py-24 px-8 lg:px-16">

    <!-- Cabeçalho da seção -->
    <div class="max-w-7xl mx-auto">

      <div class="flex flex-col lg:flex-row items-center gap-16">

        <!-- Lado esquerdo: texto -->
        <div class="flex-1 flex flex-col items-start">

          <span class="inline-block text-xs font-semibold uppercase tracking-[0.35em] mb-6 px-4 py-2 rounded-full badge-label">
            Quem somos
          </span>

          <h2 class="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 about-title">
            Mais do que um corte, <br />
            uma <span class="text-gold">experiência</span>
          </h2>

          <p class="text-base leading-relaxed mb-5 about-text">
            Fundada em 2010, nossa barbearia nasceu da paixão pelo ofício e do respeito pela tradição. Aqui, cada cliente é recebido com atenção, cuidado e um café quentinho.
          </p>

          <p class="text-base leading-relaxed mb-5 about-text">
            Nossos barbeiros são profissionais especializados, sempre atualizados com as tendências e técnicas mais modernas — sem abrir mão do estilo clássico que nos define.
          </p>

          <p class="text-base leading-relaxed mb-10 about-text">
            Um espaço pensado para o homem moderno: ambiente acolhedor, atendimento personalizado e resultados que falam por si.
          </p>

          <!-- Diferenciais -->
          <div class="grid grid-cols-2 gap-4 w-full">
            <div v-for="item in highlights" :key="item.label" class="highlight-card flex items-center gap-3 px-4 py-3 rounded-xl">
              <span class="text-xl">{{ item.icon }}</span>
              <span class="text-sm font-medium" style="color: #deccaa;">{{ item.label }}</span>
            </div>
          </div>

        </div>

        <!-- Lado direito: imagem -->
        <div class="flex-1 flex items-center justify-center w-full">
          <div class="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden image-frame">
            <img
              src="/images/frente.png"
              alt="Fachada da Barbearia"
              class="w-full h-full object-cover"
            />
            <!-- Badge flutuante -->
            <div class="absolute bottom-6 left-6 px-5 py-4 rounded-xl floating-badge">
              <p class="text-xs uppercase tracking-widest mb-1" style="color: #d4a017;">Nossa casa</p>
              <p class="font-bold text-sm" style="color: #fdfaf5;">Desde 2010</p>
            </div>
          </div>
        </div>

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
const highlights = [
  { icon: '✂️', label: 'Barbeiros especializados' },
  { icon: '💈', label: 'Técnicas tradicionais' },
  { icon: '⭐', label: '+2.000 clientes satisfeitos' },
  { icon: '🕐', label: 'Atendimento pontual' },
]
</script>

<style scoped>
.about-bg {
  background-color: #111009;
}

.about-title {
  color: #fdfaf5;
  font-family: 'Georgia', serif;
}

.text-gold {
  color: #d4a017;
}

.about-text {
  color: #deccaa;
}

.badge-label {
  background-color: rgba(212, 160, 23, 0.1);
  border: 1px solid rgba(212, 160, 23, 0.25);
  color: #d4a017;
}

.highlight-card {
  background-color: #1a1812;
  border: 1px solid #3d2512;
}

.image-frame {
  border: 1px solid #3d2512;
  box-shadow: 0 0 60px rgba(212, 160, 23, 0.1), inset 0 0 40px rgba(0,0,0,0.3);
}

.floating-badge {
  background-color: rgba(26, 24, 18, 0.9);
  border: 1px solid #3d2512;
  backdrop-filter: blur(8px);
}
</style>
