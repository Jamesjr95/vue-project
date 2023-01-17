<template>
    <div v-for="city in savedCities" :key="city.id">
    <CityCard :city="city" @click="goToCityView(city)"/>
    </div>

    <p v-if="savedCities.length === 0"> No locations added. To start tracking a location, search in the field above.</p>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import CityCard from './CityCard.vue';
import { useRouter } from 'vue-router';

const savedCities = ref([])
const apiUrl = 'http://localhost:3000/list'

const getCities = async () => {
    if (localStorage.getItem('savedCities')) {
        savedCities.value = JSON.parse(
        localStorage.getItem('savedCities'))
    }

    const requests = []
    savedCities.value.forEach((city) => {
        requests.push(
            axios.get(`${apiUrl}?lat=${city.coords.lat}&lng=${city.coords.lng}`)
        )
    })

    const weatherData = await Promise.all(requests)

    weatherData.forEach((value, index) => {
        savedCities.value[index].weather = value.data
    })
}

await getCities()
const router = useRouter()
const goToCityView = (city) => {
    router.push({
        name: 'cityView',
        params: {state: city.state, city: city.city},
        query: {id: city.id, lat: city.coords.lat, lng: city.coords.lng}
    })
}

</script>

