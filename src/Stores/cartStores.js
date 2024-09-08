import { defineStore } from "pinia";
 export const cartStore = defineStore('cart',{
    state:()=>({
        items:[],
    }),
    getters: {
        totalPrice : (state)=>state.items.reduce((total,item)=>total+item.price*item.quantity,0)
    
    },
    actions:{
        addItem(item){
            this.items.push(item)
        }

    }
 })


 alert("added to carts.");
// }

