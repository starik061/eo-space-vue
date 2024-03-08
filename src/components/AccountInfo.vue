<template>
    <div class="account">
        <span class="account--name">{{ accountData.name }}</span>
        <span class="account--coins-info">
            {{ accountData.coins }}
            <EnergyCoinIcon />
        </span>
    </div>
</template>

<script>
import EnergyCoinIcon from "@/components/icons/EnergyCoinIcon.vue"

export default {
    components: { EnergyCoinIcon },
    computed: {
        accountData() {
            return this.$tasksStore.getAccountInfo
        }
    }
}
</script>


<style lang="scss" scoped>
.account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0;
    font-size: 24px;
}

.account--coins-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
}
</style>