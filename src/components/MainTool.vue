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
            const cell = { id: nanoid(), index: -1, text:'', iscurrent: false, isfocus: false, ismarked: false }
            store.state.cells.splice(a + 1, 0, cell);
            changeIndex();
            // 判断是否只有一个元素，若是修改iscurrent为true
            if (store.state.cells.length == 1) {
                store.state.cells[0].iscurrent = true
            }
        }
        function delCell(a) {
            store.state.cells.splice(a, 1);
            changeIndex();
            // 当iscurrent为true的元素位于最底部时将该元素删除，将修改后位于最底部元素的iscurrent修改为true
            if(a == store.state.cells.length ) {
                if(a-1>=0)
                store.state.cells[a - 1].iscurrent = true;
            }
            // 当iscurrent为true的元素不位于最底部时将该元素删除，将修改前下一个元素的iscurrent修改为true
            else {
                store.state.cells[a].iscurrent = true;   
            }
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