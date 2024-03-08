<template>
    <div v-if="task">
        <h2 class=" task-conditions d-flex justify-center align-start">{{ task["task conditions"] }}</h2>
        <h3 class="task-text d-flex justify-center align-start">{{ task["task text"] }}</h3>

        <img v-if="task['task image']" class="task-image d-flex justify-center align-start" :src="task['task image']"
            :alt="task['task text']">
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
.task-conditions {
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;

    @media (max-width: 575px) {
        margin-bottom: 7px;
        font-size: 14px;
    }
}

.task-text {
    margin-bottom: 120px;
    text-align: center;
    font-size: 22px;
    font-weight: 400;

    @media (max-width: 575px) {
        font-size: 19px;
    }
}

.task-image {
    width: 100%;
    object-fit: contain;
}
</style>
