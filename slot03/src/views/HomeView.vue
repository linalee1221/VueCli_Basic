<template>

  <div class="home">
    <!-- 랜덤하게 객체 하나를 자식 컴포넌트에게 데이터 전달 -->
    <!-- 1. 자식컴포넌트에 props 이용, 데이터 전달 : ran_city = "randomCity" -->
    <!-- 부모 -> 자식 통신 : props(randomCity 데이터를 전송) -->
    <!-- slot으로 best, footer를 보냄 -->
    <ChildComp :ran_city="randomCity">
    <!-- 2. slot 이름 : best -->
    <div slot="best">
      <figure>
        <img src="@/assets/img/vienna.jpg" />
        <figcaption>비엔나(Vienna)</figcaption>
      </figure>
    </div>
    <!-- 3. slot 이름 : footer -->
    <div slot="footer">
      <footer>
        <p> &copy; All right reserved </p>
      </footer>
    </div>
    </ChildComp>
  </div>
</template>

<script>
// 자식컴포넌트 가져오기 : ChildComp
import ChildComp from "@/components/ChildComp.vue"

export default {
  name: 'HomeView',
  components: {
    ChildComp
  },
  data() {
    return {
      cities: [
        {
          cityname: "paris", pic:require("@/assets/img/paris.jpg"),
        },
        {
          cityname: "amsterdam", pic:require("@/assets/img/amsterdam.jpg"),
        },
        {
          cityname: "dresden", pic:require("@/assets/img/dresden.jpg"),
        },
      ]
    }
  },
  computed: {
    randomCity() {
      return this.cities[Math.floor(Math.random() * this.cities.length)];
    }
  }
}
</script>
