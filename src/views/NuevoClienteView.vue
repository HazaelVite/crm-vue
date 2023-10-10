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
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit type="form">
          <FormKit
            type="text"
            label="Nombre"
            placeholder="Nombre del Cliente"
            validation="required"
            :validation-messages="{
              required: 'El nombre del cliente es obligatorio',
            }"
          />
          <FormKit
            type="text"
            label="Apellido"
            placeholder="Apellido del Cliente"
            validation="required"
            :validation-messages="{
              required: 'El apellido del cliente es obligatorio',
            }"
          />
          <FormKit
            type="email"
            label="Email"
            placeholder="Email del Cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'El formato del email no es correcto'
            }"
          />
          <FormKit
            type="text"
            label="Telefono"
            placeholder="Teléfono: XXX-XXX-XXXX"
            validation="required"
            :validation-messages="{
              required: 'El teléfono del cliente es obligatorio',
            }"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .formkit-wrapper {
    width: 100%;
  }
</style>
