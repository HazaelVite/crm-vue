<script setup>
import RouterLink from "../components/general/RouterLink.vue";
import Heading from "../components/general/Heading.vue";
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink
        to="agregar-cliente"
      >
        Agregar Cliente
      </RouterLink>
    </div>
    <Heading>Clientes</Heading>
  </div>
</template>
