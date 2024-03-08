<template>
    <div class="btn">
    </div>
</template>


<style lang="scss" scoped>
.btn {
    display: flex;
    flex-shrink: 0;
    justify-content: flex-start;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 8px 8px;
    background-image: url("/close_btn.png");
    background-size: 70%;
    background-position: center;
    background-color: #ebe9e9;
    border-radius: 5px;
    -webkit-box-shadow: 0px 6px 0px 0px rgba(189, 191, 209, 1);
    -moz-box-shadow: 0px 6px 0px 0px rgba(189, 191, 209, 1);
    box-shadow: 0px 4px 0px 0px rgba(189, 191, 209, 1);

    &:hover,
    :focus {
        box-shadow: 0px 4px 0px 0px #fcfc7f;
    }
}
</style>