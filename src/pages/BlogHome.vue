<script setup>
import Listing from '../components/Listing.vue'
import { onMounted, reactive, ref } from 'vue';
let listings = ref({
    queries: [],
    listings: [],
});

let reload = async () => {
    console.log("Listings: ", listings.value)
    var rawQuery = "";
    listings.value.queries.forEach(element => {
        rawQuery += "&" + element;
    });
    let resp = await fetch("https://api.jnichols.info/blog/user/listings?page_count=10");
    resp.json().then((json) => {
        console.log(json);
        listings.value.listings = json;
    }).catch((e) => {
        console.error(e);
        return
    })
}

onMounted(async () => {
    await reload()
})
</script>
<script>
</script>

<template>
    <div className="listings">
        <h1>Blog</h1>
        <h2 v-if="listings.listings.length==0">Loading...</h2>
        <Listing v-for="listing in listings.listings" :listing="listing"/>
    </div>
</template>

<style scoped>
h1 {
    margin-bottom: 1rem;
}
</style>