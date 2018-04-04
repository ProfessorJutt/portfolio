<template>
  <div class="wrapper">
    <nav id="sidebar" class="active">
      <!-- Sidebar Header -->
      <div class="sidebar-header">
        <h1>J</h1>
      </div>
      <!-- Sidebar Links -->
      <ul class="list-unstyled components">
        <router-link tag="li" class-active="active" to="/" exact><i class="fa fa-home"></i></router-link>
        <router-link tag="li" class-active="active" to="/about"><i class="fa fa-user"></i></router-link>
        <router-link tag="li" class-active="active" to="/work"><i class="fa fa-briefcase"></i></router-link>
        <router-link tag="li" class-active="active" to="/contact"><i class="fa fa-envelope"></i></router-link>
      </ul>
    </nav>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/main.css'

export default {
  name: 'App'
}
</script>
