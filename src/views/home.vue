<template>
  <div>
    <van-button type="success" @click="sendWallet">连接钱包</van-button>
  </div>
</template>

<script setup>
import eth from "@/utils/eth.js";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
const store = useStore();

let Balance = ref("未连接钱包");
const sendWallet = async () => {
  await eth.linkWallet();
  Balance.value = store.state.balance;
};
onMounted(() => fn());
const fn = () => {
  ethereum.on("accountsChanged", async function (accounts) {
    await sendWallet();
  });
};
</script>

<style lang="scss" scoped></style>
