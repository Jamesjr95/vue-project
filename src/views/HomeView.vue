<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text"
      v-model="searchQuery" 
      @input="getSearchResults"
      placeholder="Search for a city or state"
      class="py-2 px-1 w-full bg-transparent border-b 
      focus:border-weather-secondary focus:outline-none
        focus:shadow-[0px_1px_0_0_#004E71]">
      <ul v-if='searchResults' class="absolute bg-weather-secondary text-white 
      w-full shadow-md py-2 px-1 top-[66px]"
      >
      <p v-if="searchError">
        Sorry, something went wrong, please try again.
      </p> 
      <p v-if="!searchError && searchResults.length === 0">
        No results match your query, try a different term.</p>

      <template v-else>
        <li v-for="searchResult in searchResults"
          key="searchResult.id"
          class="py-2 cursor-pointer"
          @click="previewCity(searchResult)">
          {{ searchResult.place_name }}
        </li>
      </template>
    </ul>
    </div>
    <div class="flex flex-col gap-4">
  <Suspense>      
    <CityList/>

    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
    </div>
  </main>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
import CityList from '../components/CityList.vue';

const router = useRouter()
const previewCity = (searchResult) => {
  console.log(searchResult);
  // splitting the property of place_name to grab that city and state
  const [city, state] = searchResult.place_name.split(',')
  router.push({
    name: 'cityView',
    params: {state: state.replaceAll(' ', ''), city: city},
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    }
  })
}

const searchQuery = ref('');
const queryTimeout = ref(null);
const searchResults = ref(null);
const searchError = ref(null);

const apiUrl = 'http://localhost:3000/'


// lazy search using the setTimeout method, we've set a delay of 300ms
const getSearchResults = () => {
  // everytime the user clicks a key in the input field we're setting the timeout value to 0
  clearTimeout(queryTimeout.value) 
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== ''){
      try {
        const result = await axios.get(`${apiUrl}?q=${searchQuery.value}.json`) {
        };
        searchResults.value = result.data.features;
      } catch {
        searchError.value = true
      }
     
        return
      }
      searchResults.value = null;
  }, 300)
}
</script>

