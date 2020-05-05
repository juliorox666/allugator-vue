<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="isUsuarioLogado">
      <a class="navbar-brand" href="/">Allugator</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/meus-produtos">Meus produtos <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href @click.prevent="logout()">Sair <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isUsuarioLogado: 'getIsUsuarioLogado',
      usuarioLogado: 'getIsUsuarioLogado',
    })
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$store.dispatch('setIsUsuarioLogado', false)
      this.$store.dispatch('setUsuarioLogado', {})

      this.$route.push('/')
    }
  }
}
</script>

