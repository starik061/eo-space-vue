<template>
  <h1 class="visually-hidden">Questions</h1>
  <v-container>
    <v-row>
      <v-spacer />
      <AccountInfo />
    </v-row>
    <v-row no-wrap>
      <v-col cols="2" class="d-flex justify-start align-start">
        <CloseButtonIcon />
      </v-col>
      <v-col cols="8" class="d-flex justify-center align-start">
        <MainContent :task="tasksData[currentTask - 1]" />
      </v-col>
      <v-col cols="2" class="d-flex justify-end align-start">
        <v-dialog transition="dialog-bottom-transition" width="auto">
          <template v-slot:activator="{ props: activatorProps }">
            <HelpButtonIcon v-bind="activatorProps" />
          </template>

          <template v-slot:default="{ isActive }">
            <v-card>
              <v-card-text class="modal-text pa-12"> Hello world! </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text="Close" @click="isActive.value = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>

  <AnswerButtonsBlock v-if="tasksData.length > 0 && currentTask && tasksData[currentTask - 1]['answer options']"
    :answerOptions="tasksData[currentTask - 1]['answer options']" @checkAnswer="checkAnswer" />
</template>

<script>
import AccountInfo from "/src/components/AccountInfo.vue";
import MainContent from "/src/components/MainContent.vue";
import AnswerButtonsBlock from "/src/components/AnswerButtonsBlock.vue";
import CloseButtonIcon from "/src/components/icons/CloseButtonIcon.vue";
import HelpButtonIcon from "/src/components/icons/HelpButtonIcon.vue";

import { fetchTasksData } from "./api/index.js";

export default {
  components: { AccountInfo, MainContent, AnswerButtonsBlock, CloseButtonIcon, HelpButtonIcon },

  data() {
    return {
      currentTask: 1
    }
  },

  computed: {
    tasksData() {
      return this.$tasksStore.getTasks
    }
  },

  methods: {
    async getTasks() {
      try {
        const resp = await fetchTasksData();
        await this.$tasksStore.changeTasks(resp); // refresh store tasks data

      } catch (error) {
        alert(error.message)
      }
    },

    async checkAnswer(payload) {
      if (payload === this.tasksData[this.currentTask - 1]["correct answers"]) {
        await this.$tasksStore.changeResults(true);
        // refresh store results data
        alert("Your answer is CORRECT!!! CONGRATULATIONS!!!");
      } else {
        await this.$tasksStore.changeResults(false);
        alert(`UPSS...!!Your answer is INCORRECT!!! Correct answer is ${this.tasksData[this.currentTask - 1]["correct answers"]}`);

      }

      if (this.currentTask === this.tasksData.length) {
        console.log("this.$tasksStore.getResults", this.$tasksStore.getResults)
        let correctAnswersNumber = this.$tasksStore.getResults.reduce((acc, answer) => {
          console.log(answer)
          if (answer) {
            return acc + 1
          } else {
            return acc;
          }
        }, 0);
        alert(`You give ${correctAnswersNumber} from ${this.tasksData.length} questions `)
        return
      }

      this.currentTask += 1;
    }
  },

  async mounted() {
    await this.getTasks()
  }
}
</script>

<style lang="scss" scoped>
.modal-text {
  font-size: 24px !important;

  @media (max-width: 575px) {
    font-size: 14px !important;
  }
}
</style>
