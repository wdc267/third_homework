<template>
<div id="content" class="w">
    <MyCell/>
</div>
</template>

<script>
import MyCell from './MyCell.vue'
export default {
    name: 'NoteContent',
    components:{ MyCell}
}
</script>

<style scoped>
#content {
        background-color: #ffffff;
        padding: 10px 0;
    }
</style>