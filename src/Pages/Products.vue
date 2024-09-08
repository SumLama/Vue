<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
const products = ref([])
const loading = ref(true);
const fetchProducts = async()=>{
    loading.value=true;
    try{
    const response = await axios.get('https://fakestoreapi.com/products?limit=20');
    console.log(response.data);
    products.value = response.data;
    } catch(error){
        console.log("error occurs:",error)
    }
finally{
    loading.value=false
}}
onMounted(()=>{
    fetchProducts()
})
</script>
<template>
    <div class="container ">
        <div v-if="loading" class="text-center text-2xl ">
            <h1>Loading....</h1>
        </div>
       <div v-else  class="grid grid-cols-5  m-10 justify-items-center gap-5 font-serif text-lg cursor-pointer ">
            <div v-for="product in products" :key="product.id">
                <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
              <ul class="p=6">
                <li><img :src="product.image" :alt="product.title" class="p-6 h-72 w-64 border-2 object-contain hover:border-orange-100 rounded-md hover:scale-110" ></li>
                <li class="my-3">
                    <p>{{ product.title }}</p>
                   </li>
                 <li class="my-3 text-orange-700">
                    <p>$ {{ product.price }}</p>
                   </li>
            </ul>
        </router-link>
                
              
          
            </div> 
        </div>
    </div>
  
</template>

<style scoped>

</style>