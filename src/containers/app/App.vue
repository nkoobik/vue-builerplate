<template>
  <div id="app">
    <sui-menu>
      <router-link :active="$route.path === '/'" is="sui-menu-item" to="/">Home</router-link>
    </sui-menu>

    <router-view />
  </div>
</template>
