<template>
  <div class="row center-row">
    <div class="col">
      <div class="row center-row">
        <div class="header-text">
          <div>Hello,</div>
          <div class="test">I'm Justin.</div>
          <div class="sub-text">Full-stack Web Developer</div>
        </div>
      </div>
      <div class="row center-row">
        <router-link tag="button" class="btn btn-danger" to="/work">View my experience</router-link>
      </div>
    </div>
    <div class="col hidden-xs">
      <span class="highlight">J</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

.header-text {
  font-size: 5vw;
  text-align: left;
  font-weight: bold;
}

.btn {
  font-size: 1.5vw;
}

.sub-text {
  text-align: left;
  font-size: 1.3vw;
  color: gray;
  margin-bottom: 25px;
}

.highlight {
  font-size: 20vw;
  font-weight: bold;
  color: #DC3545;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
  margin-left: 20%;
}

.center-row {
  height: 90%;
  align-items: center;
  margin-left: 10%;
}

.column-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 90%;
  width: 30%;
  font-size: 20vw;
  font-weight: bold;
  font-family: Arial;
}

.btn-danger:hover {
  border: 1px solid white;
}
</style>
