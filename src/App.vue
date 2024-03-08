<template>
  <h1 class="visually-hidden">Questions</h1>
  <v-container>
    <v-row>
      <v-spacer />
      <AccountInfo />
    </v-row>
    <v-row>
      <v-col cols="1" class="d-flex justify-start align-start">
        <CloseButtonIcon />
      </v-col>
      <v-col cols="10" class="d-flex justify-center align-start">
        <MainContent :task="tasksData[currentTask - 1]" />
      </v-col>
      <v-col cols="1" class="d-flex justify-end align-start">
        <v-dialog transition="dialog-bottom-transition" width="auto">
          <template v-slot:activator="{ props: activatorProps }">
            <HelpButtonIcon v-bind="activatorProps" />
          </template>

          <template v-slot:default="{ isActive }">
            <v-card>

              <v-card-text class="text-h2 pa-12"> Hello world! </v-card-text>

              <v-card-actions class="justify-end">
                <v-btn text="Close" @click="isActive.value = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

      </v-col>
    </v-row>
  </v-container>

  <AnswerButtonsBlock v-if="tasksData.length > 0" :answerOptions="tasksData[currentTask - 1]['answer options']"
    :multipleChoice="tasksData[currentTask - 1]['multiple choice']" />



</template>

<script>

import AccountInfo from "@/components/AccountInfo.vue";
import MainContent from "@/components/MainContent.vue";
import AnswerButtonsBlock from "@/components/AnswerButtonsBlock.vue";
import CloseButtonIcon from "@/components/icons/CloseButtonIcon.vue";
import HelpButtonIcon from "@/components/icons/HelpButtonIcon.vue";

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
        console.log(resp)
        await this.$tasksStore.changeTasks(resp); // refresh store tasks data

      } catch (error) {
        alert(error.message)
      }



    }
  },
  async mounted() {
    await this.getTasks()
  }
}
</script>

<style scoped lang="scss"></style>
