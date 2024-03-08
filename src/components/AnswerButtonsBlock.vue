<template>
    <div class="btn-container">
        <input class="visually-hidden" id="answerA" type="radio" value="A" name="answer">
        <label for="answerA" class="btn">A
        </label>
        <input class="visually-hidden" id="answerB" type="radio" value="B" name="answer">
        <label for="answerB" class="btn">B
        </label>
        <input class="visually-hidden" id="answerC" type="radio" value="C" name="answer">
        <label for="answerC" class="btn">C
        </label>
        <button class="btn check-btn" type="submit">Check</button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn-container {
    position: fixed;
    bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    padding: 10px 10px 14px 10px;
    background-color: #858585;
    font-size: 30px;
}

.btn {
    flex-grow: 2.8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 15px;
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

input[type="radio"]:checked+label.btn {
    background-color: #fcfc7f;
    box-shadow: none;
}

.check-btn {
    flex-grow: 1;

    &:hover,
    :focus {
        box-shadow: 0px 4px 0px 0px rgb(251, 126, 241);
    }
}
</style>