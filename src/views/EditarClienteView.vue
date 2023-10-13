<script setup>
import { onMounted, reactive } from 'vue';
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from 'vue-router';
import ClienteService from "../services/ClienteService";
import RouterLink from "../components/general/RouterLink.vue";
import Heading from "../components/general/Heading.vue";

const router = useRouter();
const route = useRoute();

const { id } = route.params;

const formData = reactive({
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  empresa: '',
  puesto: ''
})

onMounted(() => {
  ClienteService.obtenerCliente(id)
    .then(({data}) => {
      console.log(data.nombre);
      Object.assign(formData, data);
    })
    .catch(err => console.log(err))
});

const handleSubmit = (data) => {
  ClienteService.actualizarCliente(id, data)
    .then(() => router.push({ name: 'inicio' }))
    .catch(err => console.log(err))
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio"> Volver </RouterLink>
    </div>
    <Heading>Editar Cliente</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Editar Cliente"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
          :value="formData"
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
            v-model="formData.nombre"
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
            v-model="formData.apellido"
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
            v-model="formData.email"
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
            v-model="formData.telefono"
          />
          <FormKit
            type="text"
            label="Empresa"
            name="empresa"
            placeholder="Empresa del Cliente"
            v-model="formData.empresa"
          />
          <FormKit
            type="text"
            label="Puesto"
            name="puesto"
            placeholder="Puesto del Cliente"
            v-model="formData.puesto"
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
