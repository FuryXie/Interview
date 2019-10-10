import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        mymoney:'0',
        count:"165",
    },
    actions:{
        changeMyMoney(myx,mymoney){
            myx.commit('changeMyMoney',mymoney)
        },
        changeCount(countx,count){
            countx.commit('changeCount',count)
        }
    },
    mutations:{
        changeMyMoney(state,mymoney){
            state.mymoney=mymoney
        },
        changeCount(state,count){
            state.count=count
        }
    }
    // state:{
    //     mymoney:'北京'
    // },
    // actions:{
    //     changemymoney(ctx,mymoney){
    //         ctx.commit('changemymoney',mymoney)
    //     }
    // },
    // mutations:{
    //     changemymoney(state,mymoney){
    //         state.mymoney=mymoney
    //     }
    // }

})