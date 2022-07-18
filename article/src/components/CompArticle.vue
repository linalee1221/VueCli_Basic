<template>
    <div class="container">
        <div>
            Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur
        </div>
        <child-component></child-component>
    </div>
</template>

<script>

import ChildComponent from "./ChildComponent.vue"

export default {
    components: {
        "child-component": ChildComponent
    }
}

</script>

<style>
div {
    background: #00897b;
    color: white;
    padding: 10px 20px;
}
</style>