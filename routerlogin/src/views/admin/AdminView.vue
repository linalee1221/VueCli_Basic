<template>
    <div>
        <h3>{{ title }}</h3>

        <ul class="white">
            <li>
                <router-link to="/admin/list">
                    제품리스트(Product List)
                </router-link>
            </li>
            <li>
                <router-link to="/admin/insert">
                    제품 추가(New Product)
                </router-link>
            </li>
            
            <!-- 자식 라우트 -->
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Admin 페이지입니다."
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log("beforeRouteEnter : " + "to : " + to + "from : " + from);
        next();
    }
}
</script>

<style>
li {
    display: inline-block;
    padding: 5px;
}

li a {
    font-weight: bold;
    color: black;
}
</style>