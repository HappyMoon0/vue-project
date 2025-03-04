
<template>
    <div id='test'>
      <div>
        <slot name="title"/>
      </div>
      <div>
        <slot name="content"></slot>
      </div>
    </div>
  </template>
  <script setup>
  </script>
  <style scoped>
  #test {
    width: 100%;
    height: 50px;
    background-color: #E5DC8C;
  }
  </style>