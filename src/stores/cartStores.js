import { defineStore } from "pinia";
import { computed, ref } from "vue";
 export const cartStore = defineStore('cart',()=>{
    const items= ref({})
    const itemCount = computed(()=>{ return Object.keys(items.value).length})
    const totalPrice = computed(()=> {return Object.values(items.value).reduce((total,item)=>total+item.price*item.quantity,0)})
    const addItem = (item)=>{
        if(items.value[item.id]){
            items.value[item.id].quantity += item.quantity
        }
        else{
            items.value[item.id] = item
        }
    }
    
    const removeItem =(itemId)=>{
        if(items.value[itemId]){
            delete items.value[itemId]
        }
    }

    return {items,itemCount,totalPrice,addItem,removeItem}
 })



