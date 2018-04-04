<template>
  <div class="row center-row">
    <div class="col col-xs-12">
      <div class="row center-row">
        <div class="header-text">
          <div>Hello,</div>
          <div class="test">I'm <span class="highlight-red">J</span>ustin.</div>
          <div class="sub-text">Full-stack Web Developer</div>
        </div>
      </div>
      <div class="row center-row">
        <router-link tag="button" class="btn btn-danger" to="/work">View my experience</router-link>
      </div>
    </div>
    <div class="col">
      <span class="highlight">J</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
