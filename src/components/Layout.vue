<template>
    <div class="layout">
      <div class="layout__header">
        <div class="layout__title">
            link shortener
        </div>
        <div class="layout__user">
            Mka
        </div>
      </div>
      <div class="layout__body">
        <slot name="default"></slot>
      </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
 .layout {
    display: flex;
    flex-direction: column;
    $self: &; 
    &__header {
        background-color: white;
        display: flex;
        flex-direction: row;
        padding: 5px;
        #{$self}__title {
            font-weight: 500;
            flex-grow: 1;
        }
        #{$self}__user {
            font-weight: 500;
        }
    }
    &__body {
        flex-grow: 1;
        padding: 5px;
    }
 }
</style>