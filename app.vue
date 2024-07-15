<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="wrapper">
      <h1>evoize<span class="dot">.</span>me</h1>
      <h2>Open-source invoicing & bill pay for freelancers.</h2>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #00091B;
  color: #fff;
}

@keyframes fadeIn {
  from {top: 20%; opacity: 0;}
  to {top: 100; opacity: 1;}
}

@-webkit-keyframes fadeIn {
  from {top: 20%; opacity: 0;}
  to {top: 100; opacity: 1;}
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  animation: fadeIn 1000ms ease;
  -webkit-animation: fadeIn 1000ms ease;
}

h1 {
  font-size: 50px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0;
  line-height: 1;
  font-weight: 700;
}

h2 {
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0;
  line-height: 1;
  font-weight: 500;
}

.dot {
  color: #f59e0b;
}
</style>

