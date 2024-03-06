<template>
  <v-container>
    <v-row>
      <v-spacer />
      <AccountInfo />
    </v-row>
    <v-row>
      <div>крестик</div>
      <MainContent />
      <div>лампочка</div>
    </v-row>
  </v-container>

  <AnswerButtonsBlock />
</template>

<script>

import AccountInfo from "@/components/AccountInfo.vue";
import MainContent from "@/components/MainContent.vue";
import AnswerButtonsBlock from "@/components/AnswerButtonsBlock.vue";

export default {
  components: { AccountInfo, MainContent, AnswerButtonsBlock },

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped lang="scss"></style>
