<template>
    <div id="maintoolbar" class="w">
        <el-row>
            <el-button icon="Plus" @click="addCell($store.getters.nowIndex)" plain />
            <el-button icon="Scissor" @click="delCell($store.getters.nowIndex)" plain />
            <el-button icon="Top" @click="moveUp($store.getters.nowIndex)" plain />
            <el-button icon="Bottom" @click="moveDown($store.getters.nowIndex)" plain />
        </el-row>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
// import { ref } from 'vue'
import { useStore } from "vuex";
import emitter from "../utils/eventbus.js";// 导入事件总线
export default {
    name: 'MainTool',
    setup() {
        const store = useStore();
        function changeIndex() {
            store.state.cells.forEach(function (cell, index) {
                cell.index = index;
            });
        }
        function addCell(a) {
            // 创建cell并添加
            const cell = { id: nanoid(), index: -1, text:'', iscurrent: false, isfocus: false }
            store.state.cells.splice(a + 1, 0, cell);
            changeIndex();
        }
        function delCell(a) {
            store.state.cells.splice(a, 1);
            changeIndex();
        }
        function moveUp(a) {
            if (a - 1 >= 0) {
                console.log(a - 1);
                store.state.cells.splice(a - 1, 0, store.state.cells[a])
                store.state.cells.splice(a + 1, 1)
            }
            changeIndex();
        }
        function moveDown(a) {
            if (a + 2 <= store.state.cells.length) {
                console.log(a + 2);
                store.state.cells.splice(a + 2, 0, store.state.cells[a]);
                store.state.cells.splice(a, 1)
                changeIndex();
            }
        }
        return {
            addCell,
            delCell,
            moveUp,
            moveDown
        }
    },
    mounted() {
        emitter.on("insert", this.addCell)
    },
    beforeDestroy() {
        emitter.off('insert')
    },
}
</script>

<style scoped>
    #maintoolbar {
        margin-top: 5px;
        height: 25px;
    }

    #maintoolbar .btn-group {
        float: left;
        margin-right: 5px;
        height: 25px;
    }

    #maintoolbar .btn-group .btn {
        padding-left: 10px;
        padding-right: 10px;
        line-height: 25px;
        background-color: #ffffff;
        border: 1px solid #e7e7e7;
    }
</style>