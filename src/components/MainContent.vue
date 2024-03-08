<template>
    <div v-if="task">
        <h2>{{ task["task conditions"] }}</h2>
        <h3>{{ task["task text"] }}</h3>

        <img class="task-image" :src="task['task image']" :alt="task['task text']" width="900px" height="500px">
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.task-image {
    object-fit: contain;
}
</style>
