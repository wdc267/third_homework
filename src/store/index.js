import { createStore } from 'vuex'
/**
 * 创建仓库和导出
 */
export default createStore({
    state: {
        title: 'note title',
        cells:[
            { id: '001', index: 0, text: '吃饭', iscurrent: true, isfocus: false , ismarked: false},
            { id: '002', index: 1, text: '睡觉', iscurrent: false, isfocus: false , ismarked: false},
            { id: '003', index: 2, text: '打豆豆', iscurrent: false, isfocus: false, ismarked: false},
        ],
    },
    getters: {
        nowIndex(state) {
         let a = 0//当前有current类的cell的下标
            for (let i = 0; i < state.cells.length; i++) {
                if (state.cells[i].iscurrent || state.cells[i].isfocus) {
                    a = i;
                    break;
                }
            }
            return a;
        }
    },
    mutations: {
    },
})