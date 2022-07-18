<template>
  <div>
    <h3>Login 페이지</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  // 1st 매개변수 to : 이동할 페이지 주소
  // 2st 매개변수 from : 이동 전 페이지
  // 3rd 매개변수 next : 실질적으로 다음 페이지 이동이 일어남
  beforeRouteEnter (to, from, next) {
    console.log("beforeRouteEnter : " + "to : ", to, "from : ", from);
    next();
  },
  // 1st 매개변수 to : 이동할 페이지 주소
  // 2st 매개변수 from : 이동 전 페이지
  // 3rd 매개변수 next : 실질적으로 다음 페이지 이동이 일어남
  beforeRouteLeave (to, from, next) {
    console.log("beforeRouteLeave : " + "to : ", to, "from : ", from);
    next();
  }
}
</script>
