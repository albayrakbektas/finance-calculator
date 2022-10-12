<template>
  <div class="calculator-main-container">
    <div class="calculator-type-container">
      <select v-model="calculatorType">
        <option
          v-for="calculatorType in calculatorTypes"
          :value="calculatorType.value"
          :key="calculatorType.value"
        >
          {{ calculatorType.text }}
        </option>
      </select>
    </div>
    <form @submit="calculate">
      <FormField
        v-for="(item, index) of formFieldList"
        :form-field="item"
        v-model="item.value"
        :key="index"
      />
      <button>Calculate</button>
    </form>
    <div v-show="showResult" class="result-steps-container">
      <span ref="formula"></span>
      <span ref="steps"></span>
      <span ref="result"></span>
    </div>
  </div>
</template>

<script>
import FormField from "@/components/FormField";
export default {
  name: "CalculatorMain",
  components: { FormField },
  inject: ["app"],
  data() {
    return {
      values: [],
      calculatorType: "simpleInterest",
      calculatorTypes: [
        { text: "Simple Interest", value: "simpleInterest" },
        { text: "Compound Interest", value: "compoundInterest" },
        {
          text: "Simple Interest Present Value",
          value: "simpleInterestPresentValue",
        },
        {
          text: "Compound Interest Present Value",
          value: "compoundInterestPresentValue",
        },
        { text: "Simple Discount", value: "simpleDiscount" },
        { text: "Compound Discount", value: "compoundDiscount" },
        {
          text: "Simple Discount Present Value",
          value: "simpleDiscountPresentValue",
        },
        {
          text: "Compound Discount Present Value",
          value: "compoundDiscountPresentValue",
        },
        {
          text: "Constant Force Of Interest",
          value: "constantForceOfInterest",
        },
        {
          text: "Constant Force Of Interest Present Value",
          value: "constantForceOfInterestPresentValue",
        },
      ],
      showResult: false,
      formFieldList: [
        {
          tag: "input",
          type: "number",
          name: "principal",
          placeholder: "Principal",
          value: "",
          icon: "fa-solid fa-user",
        },
        {
          tag: "input",
          type: "number",
          name: "interest",
          placeholder: "Interest Rate (x)",
          value: "",
          icon: "fa-regular fa-envelope",
        },
        {
          tag: "input",
          type: "number",
          name: "time",
          placeholder: "Time (months)",
          value: "",
          icon: "fa-regular fa-envelope",
        },
      ],
    };
  },
  methods: {
    calculate(e) {
      e.preventDefault();
      let values = this.formFieldList;
      let { formula, steps, result } = this.app[this.calculatorType](
        values[0].value,
        values[1].value,
        values[2].value
      );
      this.$refs.formula.innerText = "Formula:\n" + formula;
      this.$refs.steps.innerText = "Steps:\n" + steps;
      this.$refs.result.innerText = "Result:\n" + result.toFixed(2);
      this.showResult = true;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.calculator-main-container {
  display: grid;
  height: 80vh;
}
.calculator-type-container {
  display: grid;
  align-items: end;
  margin: 30px;
}
select {
  color: #fafafc;
  padding: 10px 50px 10px 10px;
  background: linear-gradient(159deg, #252532 0%, #23232d 100%);
  outline: none;
  border: none;
}
.result-steps-container {
  display: grid;
  align-items: center;
  justify-content: start;
  margin: 30px;
}
span {
  text-align: left;
}
button {
  background-color: #20202a;
  color: #8c8c8e;
  height: 50px;
  padding: 15px;
  border: none;
  outline: none;
  float: right;
  margin-right: 30px;
}
</style>
