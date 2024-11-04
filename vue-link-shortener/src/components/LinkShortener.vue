<template>
  <div class="link-shortener">
    <div class="link-shortener__header">
      <h1 class="link-shortener__title">
        <span class="link-shortener__title-text">Link Shortener</span>
      </h1>
    </div>
    <div class="link-shortener__content">
     <form class="row">
        <div class="col-md-12">
            <div class="mb-3">
                <label class="form-label">Link : </label>
                <input type="text" class="form-control" v-model="link"/>
            </div>
            <div class="mb-3">
                <button class="btn" :class="link.length > 0 ? 'btn-primary' : 'btn-secondary'" 
                  :disabled="!link.length > 0" @click.prevent="shortenLinkAction">
                    shorten 
                </button>
            </div>
        </div>
        <div v-if="shortenedLink" class="col-md-12">
            <div class="mb-3">
                <label class="form-label">Shortened Link : </label>
                <input type="text" class="form-control" v-model="shortenedLink"/>
            </div>
        </div>
     </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { shortenLink } from "../utils/shortenLink";

const link = ref("");
const shortenedLink = ref("");

const shortenLinkAction = async () => {
    try {
        debugger
        const res = await shortenLink(link.value);
        shortenedLink.value = res.link;
    } catch (error) {
        console.log(error);
    }
};
</script>

<style lang="scss" scoped>
.link-shortener {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f5f5f5;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;

    &__title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 10px;

      &-text {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
      }
    }
  }
}
</style>    