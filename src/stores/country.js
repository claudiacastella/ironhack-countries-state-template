import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => ({
    flag: "",
    name: "",
    capital: "",
    area: "",
    borders: "",
  }),
  actions: {
    return (){
      this.name = name;
      this.capital = capital;
      this.area = area;
      this.borders = borders;
    },
  }
});
