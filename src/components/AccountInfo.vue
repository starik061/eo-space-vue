<template>
    <div class="account">
        <span class="account--name">Антон</span>
        <span class="account--coins-info">
            1000
            <EnergyCoinIcon />
        </span>
    </div>
</template>

<script>
import EnergyCoinIcon from "@/components/icons/EnergyCoinIcon.vue"

export default {
    components: { EnergyCoinIcon }
}
</script>


<style lang="scss" scoped>
.account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
}

.account--coins-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
}
</style>