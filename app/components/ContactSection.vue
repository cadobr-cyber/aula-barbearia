<template>
  <section class="contact-bg py-24 px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">

      <!-- Cabeçalho -->
      <div class="flex flex-col items-center text-center mb-14">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.35em] mb-6 px-4 py-2 rounded-full badge-label">
          Fale conosco
        </span>
        <h2 class="text-4xl lg:text-5xl font-extrabold leading-tight section-title">
          Onde nos <span class="text-gold">encontrar</span>
        </h2>
        <p class="mt-4 text-base max-w-md section-subtitle">
          Venha nos visitar ou entre em contato. Estamos prontos para te atender.
        </p>
      </div>

      <!-- Duas colunas -->
      <div class="flex flex-col lg:flex-row gap-10">

        <!-- Esquerda: informações -->
        <div class="flex-1 flex flex-col gap-6">

          <!-- Info cards -->
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="info-card flex items-start gap-4 p-5 rounded-xl"
          >
            <div class="info-icon flex items-center justify-center w-10 h-10 rounded-lg shrink-0">
              <span class="text-lg">{{ info.icon }}</span>
            </div>
            <div>
              <p class="info-label text-xs uppercase tracking-widest mb-1">{{ info.label }}</p>
              <p class="info-value text-sm font-medium" v-html="info.value" />
            </div>
          </div>

          <!-- Horários -->
          <div class="info-card p-5 rounded-xl">
            <div class="flex items-center gap-3 mb-4">
              <div class="info-icon flex items-center justify-center w-10 h-10 rounded-lg shrink-0">
                <span class="text-lg">🕐</span>
              </div>
              <p class="info-label text-xs uppercase tracking-widest">Horários de funcionamento</p>
            </div>
            <div class="flex flex-col gap-2">
              <div v-for="h in hours" :key="h.day" class="flex justify-between text-sm">
                <span class="hours-day">{{ h.day }}</span>
                <span class="hours-time">{{ h.time }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Direita: mapa -->
        <div class="flex-1 rounded-2xl overflow-hidden map-frame min-h-[420px]">
          <iframe
            width="100%"
            height="100%"
            style="min-height: 420px; border: 0;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754996823754!2d-46.65390548502254!3d-23.564610284681623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          />
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
const contactInfo = [
  {
    icon: '📍',
    label: 'Endereço',
    value: 'Av. das Acácias, 1250 — Sala 03<br/>Centro, São Paulo – SP'
  },
  {
    icon: '📞',
    label: 'Telefone / WhatsApp',
    value: '(11) 99999-8888'
  },
  {
    icon: '✉️',
    label: 'E-mail',
    value: 'contato@barbeariapremium.com.br'
  },
  {
    icon: '📱',
    label: 'Instagram',
    value: '@barbeariapremium'
  },
]

const hours = [
  { day: 'Segunda – Sexta', time: '9h às 20h' },
  { day: 'Sábado',          time: '9h às 18h' },
  { day: 'Domingo',         time: 'Fechado' },
]
</script>

<style scoped>
.contact-bg {
  background-color: #111009;
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

.info-card {
  background-color: #1a1812;
  border: 1px solid #3d2512;
}

.info-icon {
  background-color: rgba(212, 160, 23, 0.1);
  border: 1px solid rgba(212, 160, 23, 0.2);
}

.info-label {
  color: #d4a017;
}

.info-value {
  color: #deccaa;
  line-height: 1.6;
}

.hours-day {
  color: #9a6040;
}

.hours-time {
  color: #deccaa;
  font-weight: 600;
}

.map-frame {
  border: 1px solid #3d2512;
  box-shadow: 0 0 40px rgba(212, 160, 23, 0.08);
}
</style>
