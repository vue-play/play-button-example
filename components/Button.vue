<template>
  <b-button>{{ text }}</b-button>
</template>

<script>
  export default {
    name: 'my-button',
    displayName: 'My Button',
    props: {
      text: {
        type: String,
        default: 'Default Text'
      }
    }
  }
</script>