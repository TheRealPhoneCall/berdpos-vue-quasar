<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <sidebar />
  </div>
</template>

<script>
/*
 * Root component
 */

import Sidebar from './components/layouts/Sidebar'

export default {
  components: { Sidebar }
}
</script>

<style></style>
