<template>
  <div class="service-card">
    <!-- Imagem -->
    <div class="image-wrapper">
      <img :src="image" :alt="name" class="service-img" />
      <div class="image-overlay" />
    </div>

    <!-- Info -->
    <div class="card-body">
      <h3 class="card-name">{{ name }}</h3>
      <div class="card-footer">
        <span class="card-price">{{ price }}</span>
        <button class="card-btn">Agendar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  image: string
  price: string
}>()
</script>

<style scoped>
.service-card {
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #3d2512;
  background-color: #1a1812;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #d4a017;
  box-shadow: 0 0 32px rgba(212, 160, 23, 0.2);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.service-card:hover .service-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(10, 8, 4, 0.8) 100%);
}

.card-body {
  padding: 1rem 1.25rem 1.25rem;
}

.card-name {
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fdfaf5;
  margin-bottom: 0.75rem;
  text-transform: capitalize;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-price {
  font-size: 1.2rem;
  font-weight: 800;
  color: #d4a017;
}

.card-btn {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #3d2512;
  background-color: transparent;
  color: #deccaa;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}

.card-btn:hover {
  border-color: #d4a017;
  color: #d4a017;
}
</style>
