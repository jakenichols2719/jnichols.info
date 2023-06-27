<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import showdown from 'showdown';

const route = useRoute()
const post_id = route.params.post_id

let content = ref("")

let converter = new showdown.Converter()
converter.setFlavor("github")
let sanitizeInput = (text) => {
    // Cut out start/end quote
    if(text[0] == '"') {
        text = text.substring(1, text.length-1)
    }
    // Replace newlines with actual newlines
    text = text.replaceAll('\\n', '\n')
    // Replace unicode characters
    text = text.replaceAll('\\u003e', '>')
    return text
}

let load = async (id) => {
    let resp = await fetch(`https://api.jnichols.info/blog/user/post?post_id=${post_id}&version_id=latest`);
    resp.text().then((text) => {
        text = sanitizeInput(text)
        content.value = converter.makeHtml(text)
    }).catch((e) => {
        console.error(e);
        return
    })
}

onMounted(async () => {
    await load()
})
</script>
<script>
</script>

<template>
    <h2 v-if="content.length==0">Loading...</h2>
    <div className="article" v-html="content">
    </div>
</template>

<style>
div.article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 80ch;
}
blockquote {
    padding-left: 2rem;
    border-left: 2px solid var(--color-border)
}
img {
    width: 400px;
}
@media (max-width: 1024px) {
    img {
        width: 80%;
    }
}
</style>