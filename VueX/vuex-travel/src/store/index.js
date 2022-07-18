import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 공유 data를 등록하는 자리
    items: [
      {
        country: "France",
        city: "Paris",
        attraction: "에펠탑",
        entrance_fee: 10,
      },
      {
        country: "Italy",
        city: "Venezia",
        attraction: "산마르코 대성당",
        entrance_fee: 0,
      },
      {
        country: "Austria",
        city: "Salzburg",
        attraction: "호엔잘쯔부르크성",
        entrance_fee: 15.2,
      },
      {
        country: "Germany",
        city: "Frankfurt",
        attraction: "뢰머광장",
        entrance_fee: 0,
      },
      {
        country: "Nederland",
        city: "Amsterdam",
        attraction: "국립미술관",
        entrance_fee: 17.5,
      },
    ],
    selectedCountry: ""
  },
  getters: {
      // 가져올 함수
      items: state => {
          return state.items
      },
      // 관광지 객체 배열에서 클릭한 것의 나라 이름에 
      // 해당하는 객체만 가져오는 함수
      filteredItems: state => {
          return state.items.filter(item => {
              return item.country == state.selectedCountry
          })
      }
  },
  mutations: {
      // 원본 데이터를 가공하고 변형시킴
      reducePrice: state => {
          state.items.forEach(item => {
              item.entrance_fee = (item.entrance_fee - (item.entrance_fee * 0.2))
          })
      },
      goCountry: (state, inCountry) => {
          state.selectedCountry = inCountry
      }
  },
  // 비동기 함수일 경우 아래 등록
  actions: {
      reducePrice: context => {
          setTimeout(function() {
              context.commit("reducePrice");
          }, 2000);
      },
      goCountry: (context, inCountry) => {
          context.commit("goCountry", inCountry);
      }
  },
  modules: {},
});
