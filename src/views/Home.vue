<template>
  <div class="home">
    <h1>This is an home page</h1>
    <input
          placeholder="home"
          v-model="home"
        />
  </div>
</template>

<script>
export default {
  name: "home",
  computed:{
    home:{
      get(){
        return this.$store.state.pageData.home;
      },
      set(value){
        this.$store.commit("SET_PAGEDATA", { name: "home", value });
      }
    }
  }
};
</script>

