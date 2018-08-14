<template>
  <div id="app">
    <header>
      <span><h1>Sanction policy violations</h1></span>
    </header>
    <main>
      <commands :requestId = "requestId"></commands>
      <orders v-on:onSelectedRow='onSelectedRow'> </orders>
    </main>
  </div>
</template>

<script>

import commands from './components/commands'
import orders from './components/orders'

export default {
  data() {
      return {
        requestId: -1
      }
  },
  name: 'app',
  components: {
    commands,
    orders
  },
  methods: {
    onSelectedRow : function(requestId) {
      this.requestId = requestId;
    }
  }
}
</script>
