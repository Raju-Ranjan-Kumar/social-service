<template>
    <button type="button" class="btn btn-sm border-secondary btn-outline-secondary" @click="singOut" >
        Sign out
    </button>
</template>

<script>
import moment from "moment";

export default {
  name: "headerPage",
  data() {
    return {

    };
  },
  methods: {
    singOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

</style>