<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const products = ref([]);
const loading = ref(false);

const fetchProducts = async () => {
    loading.value = true;
    try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=20');
        console.log(response.data);
        products.value = response.data;
    } catch (error) {
        console.log("error occurs:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchProducts();
});
</script>

<template>
    <div v-if="loading" class="text-center text-2xl">
        <h1>Loading....</h1>
    </div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-5 m-8 font-serif text-lg cursor-pointer">
        <div v-for="product in products" :key="product.id" >
            <ul>
                <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
                    <li>
                        <img :src="product.image" :alt="product.title" class="h-[220px] w-[220px] p-3 border-2 rounded-md hover:shadow hover:border-4 object-contain">
                    </li>
                </router-link>
                <li class="my-3">
                    <p>{{ product.title }}</p>
                </li>
                <li class="my-3 text-orange-700">
                    <p>$ {{ product.price }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
/* Additional styling if needed */
</style>
