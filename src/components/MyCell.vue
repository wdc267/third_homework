<template>
    <div class="cells" 
    :class ="{ current: cell.iscurrent, focus: cell.isfocus}"
    @click="setCurrent(cell.index)">
        <textarea 
        class="textarea" 
        placeholder="" 
        v-model="cell.text" 
        @focus="setFocus(cell.index)" 
        @click.stop
        v-show="!cell.ismarked">
        </textarea>
        <div v-show="cell.ismarked" v-html="markdown(cell.text)"></div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import MarkdownIt from 'markdown-it';
export default {
    name: 'MyCell',
    props: ['cell'], //父组件向子组件传递cell相应数据
    setup() {
        const store = useStore();
        function setFocus (i) {
            store.state.cells.forEach(function (cell) {
                cell.isfocus = false
                cell.iscurrent = false
            })
            store.state.cells[i].isfocus = true
        }
        function setCurrent(i) {
            store.state.cells.forEach(function (cell) {
                cell.isfocus = false
                cell.iscurrent = false
            })
            store.state.cells[i].iscurrent = true
        }
        function markdown(text) {
            const md = new MarkdownIt();
            const result = md.render(text)
            return result
        }
        return {
            setFocus,
            setCurrent,
            markdown,
        }
    }
}
</script>

<style scoped>
.cells{
    width: 90%;
    margin: 20px auto;
    padding: 5px 25px;
    font-size: 20px;
    color: black;
    list-style: disc;
    border: 1px solid transparent;
    border-left: 5px solid transparent;
}

.current {
    border: 1px solid #409eff;
    border-left: 5px solid #409eff;
}
.focus {
    border: 1px solid orange;
    border-left: 5px solid orange;
}
textarea {
    width: 100%;
    min-height: 30px;
    margin: 0 auto;
    padding: 0;
    font-size: 20px;
    resize: none;
    outline: none;
    background-color: #f7f7f7;
    border: 1px solid #e7e7e7;
    overflow-y: hidden;
}
</style>