<template>
    <div class="coin">
    </div>
</template>


<style lang="scss" scoped>
.coin {
    width: 20px;
    height: 20px;
    background-image: url("/coin.png");
    background-size: cover;

    @media (max-width: 575px) {
        width: 17px;
        height: 17px;
    }
}
</style>