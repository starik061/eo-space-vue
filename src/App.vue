<template>
  <h1 class="visually-hidden">Questions</h1>
  <v-container>
    <v-row>
      <v-spacer />
      <AccountInfo />
    </v-row>
    <v-row>
      <v-col cols="1">
        <CloseButtonIcon />
      </v-col>
      <v-col cols="10">
        <MainContent />
      </v-col>
      <v-col cols="1">
        <HelpButtonIcon />
      </v-col>
    </v-row>
  </v-container>

  <AnswerButtonsBlock />
</template>

<script>

import AccountInfo from "@/components/AccountInfo.vue";
import MainContent from "@/components/MainContent.vue";
import AnswerButtonsBlock from "@/components/AnswerButtonsBlock.vue";
import CloseButtonIcon from "@/components/icons/CloseButtonIcon.vue";
import HelpButtonIcon from "@/components/icons/HelpButtonIcon.vue";



export default {
  components: { AccountInfo, MainContent, AnswerButtonsBlock, CloseButtonIcon, HelpButtonIcon },

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped lang="scss"></style>
