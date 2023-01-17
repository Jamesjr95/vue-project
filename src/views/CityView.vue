<template>
    <div>
        <!-- suspense is a built in component that can render a loading state
        will our async dependancies down the component tree (in this case our AsyncCityView) load-->
        
        <Suspense>
            <AsyncCityView/>
            <template #fallback>
                <p class="text-white text-center py-12">Loading...</p>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import AsyncCityView from '../components/AsyncCityView.vue';


</script>

