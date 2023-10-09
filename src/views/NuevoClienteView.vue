<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/general/RouterLink.vue";
import Heading from "../components/general/Heading.vue";
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio"> Volver </RouterLink>
    </div>
    <Heading>Agregar Cliente</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <FormKit type="form">
        <FormKit
          type="text"
          label="Nombre"
          placeholder="Nombre del Cliente"
          help="Coloca el nombre del cliente que deseas registrar"
          validation="required"
          :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
        />
      </FormKit>
    </div>
  </div>
</template>
 