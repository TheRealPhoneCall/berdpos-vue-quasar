<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout
    ref="layout"
    view="hhh LpR fFf"
  >
    <q-toolbar slot="header">
      <img 
        height="70px" 
        width="auto" 
        src="~statics/bw_logo.png"
        @click="$router.push('/main')"
      />
      <q-toolbar-title>
        berdPOS
        <span slot="subtitle">POS nga LRJ!</span>
      </q-toolbar-title>
    </q-toolbar>

    <!-- Navigation Tabs -->
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/layout/about" replace hide="icon" label="Dashboard" />
      <q-route-tab slot="title" icon="view_day" to="/layout/toolbar" replace hide="icon" label="Sales" />
      <q-route-tab slot="title" icon="view_day" to="/layout/tabs" replace label="Inventory" />
      <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Customers" />
      <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Staff" />
      <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Settings" />      
    </q-tabs>
   

    <!-- Right Side Panel
    <div slot="right">
      ...
    </div>
    -->

    <router-view />

    <!-- Footer -->
    <q-toolbar slot="footer">
      ...
    </q-toolbar>
   
  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
