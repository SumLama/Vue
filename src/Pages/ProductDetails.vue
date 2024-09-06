<script setup>
import { ref } from 'vue';
const color = ref('blue')
const quantity = ref(0)
const product= {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  
  }

  const IncreaseQty= ()=>{
  
        quantity.value++;
    
}
const DecreaseQty= ()=>{
    if(quantity.value>0){
        quantity.value--;
    }
}
</script>
<template>
<div class="container">
    <div class="flex flex-row m-5 py-7">
        <!-- <div class="w-1/3 flex justify-center items-center ">
            <img :src="product.image" :alt="product.title" class="h-2/3 border-2 p-7"/>
        </div>   
                                                        -->
      <div class="w-1/3 grid grid-cols-1 justify-items-center ">
        <div >
            <img :src="product.image" :alt="product.title" class="h-340 w-72 border-2 p-7 my-2"/>
        </div>
        <div class=" flex flex-row flex-nowrap gap-2 h-20 w-72">
            <img :src="product.image" :alt="product.title" class="h-auto w-1/4 border-2 p-2"/>
            <img :src="product.image" :alt="product.title" class="h-auto w-1/4 border-2 p-2"/>
            <img :src="product.image" :alt="product.title" class="h-auto w-1/4  border-2 p-2"/>
            <img :src="product.image" :alt="product.title" class="h-auto w-1/4  border-2 p-2"/>

       
        </div> 
            
        </div> 
        <div class="w-1/2">
            <ul>
                <li>
                    <h1 class="text-2xl">{{ product.title }}</h1>
                </li>
                <li class="my-5">
                    <div class="text-xl" >
                        <label>Price:</label>
                    <h1 >$ {{ product.price }}</h1>
                    </div>
                   
                </li  >
                <li class="text-xl my-5" >
                <div>
                    <label>Color:</label><br>
                    <input type="radio" id="blue" v-model="color" value="blue" />
                    <lable class="mx-3">Blue</lable>

                    <input type="radio" id="red" v-model="color" value="red"/>
                    <label class="mx-3">Red</label>

                    <input type="radio" id="black" v-model="color" value="black"/>
                    <label class="mx-3">Black</label>
                </div>
                
                </li> 
                <li  class="my-5">
                    <div class="text-xl" >
                        <label>Quantity:</label><br>
                        <button class="font-bold" @click="DecreaseQty">-</button>
                    <input type="text" placeholder="0" :value="quantity" class="h-10 w-10 m-5 text-center border-2 " />
                    <button class="font-bold" @click="IncreaseQty">+</button>   
                    </div>
                    
                </li>
                <li class="text-lg border-t pt-2">
                    <label>Description</label>
                  <h1>{{ product.description }}</h1>  
                </li>
            </ul>
            





            
        </div>
    </div>

  


</div>
</template>
<style scoped>

</style>