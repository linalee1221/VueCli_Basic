<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품코드</th>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.pcode"
                    v-on:click="sendCode(product.pcode)">
                    <td>{{ product.pcode }}</td>
                    <td>{{ product.pname }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { 
                    pcode: "p01", 
                    pname: "LG gram 노트북", 
                    description: "OS : Windows 10 Home, CPU: Intel Core i7",
                    price: 1750000
                },
                { 
                    pcode: "p02", 
                    pname: "페레가모 선글라스", 
                    description: "병행 수입",
                    price: 139000
                },
                { 
                    pcode: "p03", 
                    pname: "단골언니 신발", 
                    description: "저렴한 가격의 신발",
                    price: 12000
                },
            ]
        }
    },
    methods: {
        sendCode(inCode) {
            const id = inCode;
            // get 방식 : URL을 이용한 데이터 전송 방식
            // 페이지 이동 : productedit 페이지
            this.$router.push({path:`edit/${id}`})
            // this.$router.push({name:"productedit", params:{id}});
        }
    },
}
</script>

<style>

</style>