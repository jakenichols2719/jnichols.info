<script setup>
const props = defineProps({
    listing: {
        required: true,
    }
})

const href = `/blog/${props.listing.post_id}`
</script>

<template>
    <div class="listing">
        <h2>{{ listing.title }}</h2>
        <p>{{ listing.description }}</p>
        <div class="listing-tags"><button class="listing-tag" v-for="tag in listing.tags" >{{ tag }}</button></div>
        <p>Uploaded {{ new Date(listing.upload_timestamp * 1000 ).toLocaleDateString() }}</p>
        <p v-if="listing.update_timestamp">Updated {{ new Date(listing.update_timestamp * 1000).toLocaleDateString() }}</p>
        <router-link :to="href" class="read-button">Read</router-link>
    </div>
</template>

<style scoped>
div.listing {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
}
div.listing-tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
button.listing-tag {
    padding: 4px 1rem;
}
.read-button {
    background-color: var(--color-background-mute);
    padding: 4px 1rem;
    text-align: center;
}
</style>
