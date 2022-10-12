<template>
  <div class="welcome-page">
    <h1>Welcome</h1>
    <h2>to</h2>
    <h3>Finance Calculator</h3>
    <h4>by</h4>
    <h1 class="name">Bektas Albayrak</h1>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<style scoped lang="scss">
.welcome-page {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  translate: -50% -50%;
  h1 {
    translate: 0 0;
    animation: 0.5s ease-in-out slideInFromUp;
  }
  h4 {
    translate: 0 0;
    animation: 0.5s ease-in-out slideInFromLeft;
  }
  h3 {
    translate: 0 0;
    animation: 0.5s ease-in-out slideInFromZ;
  }
  h2 {
    translate: 0 0;
    animation: 0.5s ease-in-out slideInFromRight;
  }
  .name {
    translate: 0 0;
    white-space: nowrap;
    animation: 0.5s ease-in-out slideInFromDown;
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromDown {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slideInFromUp {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slideInFromZ {
  0% {
    transform: translateZ(-100%);
    scale: -1;
  }
  100% {
    scale: 1;
    transform: translateZ(0);
  }
}
</style>
