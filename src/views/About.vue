<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input
          placeholder="about"
          v-model="about"
        />
  </div>
</template>

<script>
export default {
  name: "about",
  computed:{
    about:{
      get(){
        return this.$store.state.pageData.about;
      },
      set(value){
        this.$store.commit("SET_PAGEDATA", { name: "about", value });
      }
    }
  }
};
</script>
