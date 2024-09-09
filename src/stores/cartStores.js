import { defineStore } from "pinia";
 const cartStore = defineStore('cart',{
    state:()=>({
        items:[],
    }),
    getters: {
        itemCount :(state)=> state.items.length,
        totalPrice : (state)=>state.items.reduce((total,item)=>total+item.price*item.quantity,0)
    
    },
    actions:{
        addItem(item){
            this.items.push(item)
        }

    }
 })
export {cartStore};


