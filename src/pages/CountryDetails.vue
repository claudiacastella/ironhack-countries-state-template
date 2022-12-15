<template>
  <img :src="country.flag" alt="country flag" style="width: 300px" />
  <h1> {{country.name}}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{country.capital}}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{{country.area}} km <sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            <li v-for="el in country.borders">
              <a href="/">{{el}}</a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import {useCountryStore} from "../stores/country"

const country = useCountryStore();


</script>

<style></style>
