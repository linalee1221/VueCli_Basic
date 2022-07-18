<template>
    <div class="wrap">
        <!-- 토글 버튼 추가 : show가 true이면 웹툰, 아니면 설문조사-->
        <button v-on:click="show = !show">웹툰 / 설문조사 보기</button>
        <!-- 웹툰 영역 -->
        <div v-if="show">
            <h2>Webtoon</h2>
            <ul>       
                <li class="item" v-for="(item, idx) in items" :key="idx">
                    <a :href="item.link" target="_blank">
                        <img :src="item.img">
                        <input type="checkbox" :id="item.id" :value="item.name"
                            v-model="checkedWebtoons"> 
                        <span class="tit">제목 : {{ item.name }} </span>
                    </a>
                    <!-- 웹툰이 최신작일 경우 표시 -->
                    <span class="tag" v-if="item.isUpdate">N</span>                    
                </li>
                <!-- 웹툰 찜한 목록 보여주기 -->
                <span class="tit"> {{ title }} :  </span>
                <span class="tit" v-for="(checkedWebtoon, idx) in checkedWebtoons"
                      :key="idx"> {{ checkedWebtoon }} </span>
            </ul>
        </div>   

        <!-- 간단한 설문조사 추가 -->
        <div v-else>
            <h2>성별</h2>
            <!-- 1. label 추가 -->
            <!-- 라디오 버튼 2개 추가 : 남, 여 -->
            <!-- 변수명 : gender -->
            <!-- 콧수염 표기법으로 gender 출력 -->
            <input type="radio" id="male" value="남" v-model="gender">
            <label for="male">남</label>

            <input type="radio" id="female" value="여" v-model="gender">
            <label for="female">여</label>
            <br>
            <span>당신의 성별을 알려주세요: {{ gender }}</span>

            <h2>선호 장르</h2>
            <!-- 2. 선호 장르 추가 -->
            <!-- select 버튼 이용, 옵션은 로맨스, 호러, 스릴러 -->
            <!-- 콧수염 표기법으로 category 출력 -->
            <select v-model="category">
                <option disabled value="">선택해주세요.</option>
                <option>로맨스</option>
                <option>호러</option>
                <option>스릴러</option>
            </select>
            <br>
            <span>선택한 장르 : {{ category }}</span>
        </div>
    </div>    
</template>

<script>
export default {
    name: "WebtoonComponent",
    props: {
        items: {
             type: Array,
        default: () => []
        },
    },
    data() {
        return {
            // 찜한 웹툰 추가하기
            title: "찜한 웹툰",
            checkedWebtoons: [],
            // 성별, 장르를 추가할 변수
            gender: "",
            category: "",
            // 설문조사 보이기 안보이기
            show: false
        }
    }
}
</script>

<style>
h2 {
    text-align: center;
}

a {
    list-style: none;
    text-decoration: none;
}

li {
    list-style: none;
}

.wrap {
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
}

.item {
    position: relative;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 25px;
}

.tit {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: black;
    padding: 20px 15px;
}

img {
    width: 100%;
    background: #ebebeb;
    border-radius: 4px;
}

.tag {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 5px 30px;
    color: white;
    border-radius: 4px;
    background: #fc2332;
    font-weight: bold;
}
</style>