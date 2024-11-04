<template>
  <div class="link-shortener">
    
    <div class="link-shortener__form">
        <input type="text" class="form-control link-shortener__input"  placeholder="link goes here ..." v-model="link">
        <button class="btn link-shortener__button" :class="link.length > 0 ? 'btn-primary' : 'btn-secondary'" 
                :disabled="!link.length > 0" @click.prevent="shortenLinkAction">
                    shorten 
        </button>
    </div>
    <div class="link-shortener__result" v-if="shortenedLink">
        <label class="form-label"> Shortened Link : </label>
        <div class="link-shortener__text mb-3">
            <a class="link-shortener__text" :href="shortenedLink" target="_blank">{{ shortenedLink }}</a>   
        </div>
        <div class="link-shortener__actions">
            <button class="btn btn-outline-primary" @click.prevent="shortenedLink = ''">Reset</button>
            <button class="btn btn-outline-success" @click.prevent="copyFn(shortenedLink)">Copy</button>
        </div>   
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { shortenLink } from "../utils/shortenLink";

import { useClipboard } from '@vueuse/core';

const link = ref("");
const shortenedLink = ref("");
const copied = ref(false);

const { text, isSupported, copy } = useClipboard()

const shortenLinkAction = async () => {
    try {
        const res = await shortenLink(link.value);
        shortenedLink.value = res.link;
    } catch (error) {
        console.log(error);
    }
};

const copyFn = async(txt: string) => {
    await copy(txt);
    console.log(text.value);
}
</script>

<style lang="scss" scoped>
.link-shortener {
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px var(--bs-gray-300) solid;
  border-radius: 5px;
  height: 100%;
  margin-top: 10px;
  $self: &;
  &__form {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    #{$self}__input {
        flex-grow: 1;
        margin-right: 5px;
    }
    #{$self}__button {
        flex-grow: 0;
    }
  }
  &__result {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 15px;
    #{$self}__text {
        flex-grow: 1;
    }
    #{$self}__actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        flex-grow: 0;
        button {
            margin-left: 5px;
            margin-right: 5px;
        }
    }
  }
}
</style>    