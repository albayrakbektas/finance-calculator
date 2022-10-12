<template>
  <div id="app">
    <WelcomePage v-if="$store.state.landingPageTimeout" />
    <router-view v-else />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  background: #000000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,
h2,
h3,
h4,
h5,
h6,
span {
  margin: 0;
  color: #ffffff;
}
</style>
<script>
import WelcomePage from "@/components/WelcomePage";
export default {
  components: { WelcomePage },
  provide() {
    return {
      app: this,
    };
  },
  methods: {
    simpleInterest(principal, interest, time) {
      let formula = "A(t) = A(0) * (1 + it)";
      let steps = `A(t) = ${principal} * (1 + ((${interest} / 100) * (${time} / 12))`;
      let result = principal * (1 + (interest / 100) * (time / 12));
      return { formula, steps, result };
    },
    compoundInterest(principal, interest, time) {
      let formula = "A(t) = A(0) * (1 + i)^t";
      let steps = `A(t) = ${principal} * (1 + ${interest / 100}) ^ ${
        time / 12
      }`;
      let result = principal * Math.pow(1 + interest / 100, time / 12);
      return { formula, steps, result };
    },
    simpleInterestPresentValue(principal, interest, time) {
      let formula = "A(0) = A(t) / (1 + it)";
      let steps = `A(0) = ${principal} / (1 + (${interest / 100} * ${
        time / 12
      })`;
      let result = principal / (1 + (interest / 100) * (time / 12));
      return { formula, steps, result };
    },
    compoundInterestPresentValue(principal, interest, time) {
      let formula = "A(0) = A(t) * (1 + i)^t";
      let steps = `A(0) = ${principal} / ((1 + ${interest / 100}) ^ ${
        time / 12
      })`;
      let result = principal / Math.pow(1 + interest / 100, time / 12);
      return { formula, steps, result };
    },
    simpleDiscount(principal, discount, time) {
      let formula = "A(t) = A(0) * ((1 - td) ^ (-1))";
      let steps = `A(t) = ${principal} * (1 - ((${discount} / 100) * (${time} / 12)) ^ (-1)`;
      let result = principal * Math.pow(1 - (discount / 100) * (time / 12), -1);
      return { formula, steps, result };
    },
    compoundDiscount(principal, discount, time) {
      let formula = "A(t) = A(0) * (1 - d) ^ (-t)";
      let steps = `A(t) = ${principal} * (1 - ${discount / 100}) ^ ${
        time / -12
      }`;
      let result = principal * Math.pow(1 - discount / 100, time / -12);
      return { formula, steps, result };
    },
    simpleDiscountPresentValue(principal, discount, time) {
      let formula = "A(0) = A(t) * (1 - td)";
      let steps = `A(0) = ${principal} * (1 - (${discount / 100} * ${
        time / 12
      }))`;
      let result = principal * (1 - (discount / 100) * (time / 12));
      return { formula, steps, result };
    },
    compoundDiscountPresentValue(principal, discount, time) {
      let formula = "A(0) = A(t) * (1 - d)^t";
      let steps = `A(0) = ${principal} * (1 - ${discount / 100}) ^ ${
        time / 12
      }`;
      let result = principal * Math.pow(1 - discount / 100, time / 12);
      return { formula, steps, result };
    },
    landingPage() {
      setTimeout(() => {
        this.$store.state.landingPageTimeout = false;
      }, 1000);
    },
  },
  mounted() {
    this.landingPage();
  },
};
</script>
