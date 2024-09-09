<script setup>
import { ref,onMounted ,computed, onBeforeMount} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { cartStore} from '@/stores/cartStores';

const route = useRoute();
// const color = ref('blue');
const quantity = ref(1);
const product=ref();
const loading = ref(false);
const selectedImage= ref()
const images=[
"https://images.pexels.com/photos/28120193/pexels-photo-28120193/free-photo-of-the-golden-raspberries-in-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
" https://images.pexels.com/photos/18144023/pexels-photo-18144023/free-photo-of-farmer-in-conical-hat-on-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/27244360/pexels-photo-27244360/free-photo-of-car-by-maelifell-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
const id = computed(() => route.params.id);
const fetchProductDetails = async () => {
    loading.value =true
  try {
    
    const response = await axios.get(`https://fakestoreapi.com/products/${id.value}`);
    product.value = response.data;
    selectedImage.value =images[0];
  } catch (error) {
    console.log('Error fetching product details:', error);
  }
  finally{
    loading.value = false;
  }
};

onMounted(() => {  
  fetchProductDetails();
});

const selectImage=(img)=>{
    selectedImage.value=img;

}
const IncreaseQty= ()=>{
  
    quantity.value++;
    
}
const DecreaseQty= ()=>{
    if(quantity.value>0){
        quantity.value--;
    }
}

const cartstore = cartStore();

const addToCart = ()=>{
    if(product.value){
        const item=({
        id:product.value.id,
        image:product.value.image,
        title:product.value.title,
        price:product.value.price,
        quantity :quantity.value

    })
   
    cartstore.addItem(item);
    alert("Added to cart");
    }
}

</script>
<template>r

    <div v-if="loading" class="text-center text-2xl ">
        <h1>Loading.............</h1>
    </div>
    <div v-else-if="product" class="flex-row md:flex mx-5 ">
        <!-- <div class="w-1/3 flex justify-center items-center ">
            <img :src="product.image" :alt="product.title" class="h-2/3 border-2 p-7"/>
        </div>   
                                                        -->
      <div class="grid grid-cols-1 w-full md:w-1/3  h-1/2  md:justify-items-center ">
        <div >
            <img :src="selectedImage" :alt="product.title" class="h-[330px] w-72 border-2 md:my-3 p-7"/>
        </div>
        <div class=" flex flex-row gap-2 h-20 w-72 my-4 md:my-0 ">
            <img :src="images[0]" @click="selectImage(images[0])" :alt="product.title" class="h-auto w-1/4 border-2 p-2"/>
            <img :src="images[1]" @click="selectImage(images[1])"  :alt="product.title" class="h-auto w-1/4 border-2 p-2"/>
            <img :src="images[2]" @click="selectImage(images[2])"  :alt="product.title" class="h-auto w-1/4  border-2 p-2"/>
            <img :src="product.image" @click="selectImage(product.image)"  :alt="product.title" class="h-auto w-1/4  border-2 p-2"/>

       
        </div> 
            
        </div> 
        <div class="w-full md:w-1/2 md:mx-10 lg:mx-0">
            <ul>
                <li>
                    <h1 class="text-2xl">{{ product.title }}</h1>
                </li>
                <li class="my-2">
                    <div class="text-xl" >
                        <label>Price:</label>
                    <h1 >$ {{ product.price }}</h1>
                    </div>
                   
                </li  >
                <!-- <li class="text-xl my-5" >
                <div>
                    <label>Color:</label><br>
                    <input type="radio" id="blue" v-model="color" value="blue" />
                    <label class="mx-3">Blue</label>

                    <input type="radio" id="red" v-model="color" value="red"/>
                    <label class="mx-3">Red</label>

                    <input type="radio" id="black" v-model="color" value="black"/>
                    <label class="mx-3">Black</label>
                </div>
                
                </li>  -->
                <li  class="my-2">
                    <div class="text-xl" >
                        <label>Quantity:</label><br>
                        <button class="font-bold" @click="DecreaseQty">-</button>
                    <input type="text" placeholder="1" v-model="quantity" class="h-10 w-10 m-2 text-center border-2 " />
                    <button class="font-bold" @click="IncreaseQty">+</button>   
                    </div>
                    
                </li>
                <li class="my-3">
                    <button class="bg-gray-800 text-white p-2 rounded-md w-2/4 text-xl" @click="addToCart">Add to cart</button>
                </li>
                <li class="text-lg border-t mt-2 pt-2">
                    <label>Description</label>
                  <h1>{{ product.description }}</h1>  
                </li>
            </ul>           
        </div>
    </div>
    

</template>
<style scoped>

</style>