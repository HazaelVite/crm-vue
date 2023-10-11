<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
import RouterLink from "../components/general/RouterLink.vue";
import Heading from "../components/general/Heading.vue";

onMounted(() => {
  // Con promesa
  axios.get('http://localhost:4000/clientes')
    .then(({ data }) => {
      console.log(data);
    }).catch(err => console.log('Error'))
});

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
