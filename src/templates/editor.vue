<template>
  <div class="editable" contenteditable="true" @input="update"></div>
</template>
<script>
  export default {
    props: ['content'],
    mounted:
      function () {
        this.$el.innerText = this.content
      },
    methods: {
      update: function (event) {
        this.$emit('update', event.target.innerText)
      }
    }
  }
</script>
<style>
  .editable{
    text-align: justify;
    max-width: 60em;
    min-width: 40em;
    padding: 5px;
    border: solid 1px rgb(57, 128, 181);
  }

  .editable:focus{
    outline-width: 0;
  }

</style>
