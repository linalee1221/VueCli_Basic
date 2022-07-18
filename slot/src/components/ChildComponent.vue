<template>
    <div>
        <!-- #1 예제 -->
        <!-- <slot></slot> -->

        <!-- #2 예제 -->
        <!-- 왼쪽버튼 -->
        <!-- <slot name="left">왼쪽버튼</slot> -->
        <!-- 오른쪽버튼 -->
        <!-- <slot name="right">오른쪽버튼</slot> -->

        <!-- #3 예제 -->
        <header>
            <slot name="child" :childData="childData" :close="close"></slot>
        </header>
        <div>
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            childData: "child",
            active: false
        };
    },
    methods: {
        close() {
            this.active = false;
            alert(this.active);
        }
    },
}
</script>

<style>

</style>