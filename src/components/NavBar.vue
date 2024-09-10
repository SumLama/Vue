<script setup>
import { cartStore } from '@/stores/cartStores';
const cart = cartStore()
</script>
<template>   
    <div>
        <ul class="flex justify-center gap-5 text-2xl my-5 mx-2 ">
            <li><router-link to="/" class="hover:text-orange-700">Home</router-link></li>
            <li><router-link to="/cartlist" class="hover:text-orange-700"><i class="fa fa-cart-shopping"></i>
                <span class="text-base align-text-top mx-1">{{ cart.itemCount }}</span>
            </router-link></li>    
        </ul>
    </div>
</template>

<style scoped>

</style>