<script>
export default {
  name: 'NavBar'
}
</script>

<template>
<nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    <router-link to="/" class="navbar-brand mb-0 h1">
      <button class="btn btn-outline-success me-2" type="button">Início</button>
    </router-link>
    <router-link to="/contato" class="navbar-brand mb-0 h1">
      <button class="btn btn-sm btn-outline-secondary" type="button">Contato</button>
    </router-link>
    <router-link to="/sobre" class="navbar-brand mb-0 h1">
      <button class="btn btn-sm btn-outline-secondary" type="button">Sobre</button>
    </router-link>
  </form>
</nav>
</template>