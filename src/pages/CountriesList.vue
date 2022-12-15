<template>
  <div class="list-group">
    <div
      class="list-group-item list-group-item-action"
      v-for="el in countries"
      @click="showCountry(el)"
    >
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/
${el.alpha2Code.toLowerCase()}.png`"
      />
      <p>{{ el.name.common }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useCountryStore} from "../stores/country"

const countries = ref(null);

async function getCountries() {
  const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
  const finalRes = await res.json();
  countries.value = finalRes;
}

getCountries();

const country = useCountryStore();

function showCountry(el){
  country.flag = `https://flagpedia.net/data/flags/icon/72x54/
${el.alpha2Code.toLowerCase()}.png`;
  country.name = el.name.common;
  country.capital = el.capital[0];
  country.area = el.area;
  country.borders = el.borders;
}

</script>

<style></style>
