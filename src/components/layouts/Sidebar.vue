<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout
    ref="layout"
    view="hhh LpR fFf"
  >
    <q-toolbar slot="header">     
      <!-- opens drawer below -->
      <button class="hide-on-drawer-visible" @click="$refs.layout.open()">
        <i>menu</i>
      </button>
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

    <!-- Left Side Panel -->
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-side-link item to="/main">
          <q-item-side icon="school" />
          <q-item-main label="Dashboard" />
        </q-side-link>
        <q-side-link item to="/register">
          <q-item-side icon="school" />
          <q-item-main label="Register" />
        </q-side-link>
        <q-side-link item to="/sales">
          <q-item-side icon="school" />
          <q-item-main label="Sales" />
        </q-side-link>
        <q-side-link item to="/invetory">
          <q-item-side icon="school" />
          <q-item-main label="Inventory" />
        </q-side-link>
        <q-side-link item to="/customers">
          <q-item-side icon="school" />
          <q-item-main label="Customers" />
        </q-side-link>
        <q-side-link item to="/employees">
          <q-item-side icon="school" />
          <q-item-main label="Employees" />
        </q-side-link>
        <q-side-link item to="/report">
          <q-item-side icon="school" />
          <q-item-main label="Reports" />
        </q-side-link>
        <q-side-link item to="/settings">
          <q-item-side icon="school" />
          <q-item-main label="Settings" />
        </q-side-link>
      </q-list>
    </div>
   

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
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QSideLink,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QSideLink,
    QItemSide,
    QItemMain
  }
}
</script>

<style>
</style>
