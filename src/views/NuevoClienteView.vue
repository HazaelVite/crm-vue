<script setup>
import { FormKit } from "@formkit/vue";
import { useRouter } from 'vue-router';
import axios from '../config/axios';
import RouterLink from "../components/general/RouterLink.vue";
import Heading from "../components/general/Heading.vue";


const router = useRouter();

const handleSubmit = (data) => {
  console.log(data);
  axios.post('/clientes', data)
    .then(res => {
      console.log(res)
      // Redireccionar con vue router
      router.push({ name: 'inicio' });
    })
    .catch(err => console.error(err))
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio"> Volver </RouterLink>
    </div>
    <Heading>Agregar Cliente</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar Cliente"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="nombre"
            placeholder="Nombre del Cliente"
            validation="required"
            :validation-messages="{
              required: 'El nombre del cliente es obligatorio',
            }"
          />
          <FormKit
            type="text"
            label="Apellido"
            name="apellido"
            placeholder="Apellido del Cliente"
            validation="required"
            :validation-messages="{
              required: 'El apellido del cliente es obligatorio',
            }"
          />
          <FormKit
            type="email"
            label="Email"
            name="email"
            placeholder="Email del Cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'El formato del email no es correcto',
            }"
          />
          <FormKit
            type="text"
            label="Telefono"
            name="telefono"
            placeholder="Teléfono: XXX-XXX-XXXX"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'El teléfono no cumple el formato',
            }"
          />
          <FormKit
            type="text"
            label="Empresa"
            name="empresa"
            placeholder="Empresa del Cliente"
          />
          <FormKit
            type="text"
            label="Puesto"
            name="puesto"
            placeholder="Puesto del Cliente"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  width: 100% !important;
}
</style>
