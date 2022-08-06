<script setup>
import { ref } from 'vue'
const triggerOne = ref('This works!')
const create = () => {
    parent.postMessage({ pluginMessage: { type: 'apply-code', triggerOne: triggerOne.value } }, '*')
}

const cancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
</script>

<template>
    <p>Take a look in the console</p>
    <button @click="create">Create</button>
    <button @click="cancel">Cancel</button>
</template>

<style></style>
