<template>
<div id="content" class="w">
    <h1>{{$store.state.title}}</h1>
    <MyCell
    v-for="cell in $store.state.cells"
    :key="cell.id"
    :index = "cell.index"
    :cell="cell"
    />
</div>
</template>

<script>
import MyCell from './MyCell.vue'
import {reactive} from 'vue'
export default {
    name: 'NoteContent',
    components: { MyCell },
}
</script>

<style scoped>
#content {
        background-color: #ffffff;
        padding: 10px 0;
    }
h1 {
    text-align: center;
}
</style>