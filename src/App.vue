<template>
  <div id="app">
    <header>
      <span>Sanction policy violations</span>
    </header>
    <main>
      <commands></commands>
      <orders> </orders>
    </main>
  </div>
</template>

<script>
import commands from './components/commands'
import orders from './components/orders'

export default {
  name: 'app',
  components: {
    commands,
    orders
  }
}
</script>