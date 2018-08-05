<template>
  <div class="commands">
    <kendo-button name="Confirm" @click="onClick1" class='k-primary' style="width:150px">Confirm</kendo-button>
    <kendo-button name="Recall" @click="onClick2" class = 'k-primary' style="width:150px">Recall</kendo-button>
  </div>
</template>


<script>
export default {
  name: 'Commands',
  data () {
    return {
      
    }
  },
  methods:{
    onClick1 : function(ev){
      console.log("OnClick1 clicked")
    },
    onClick2 :function(ev){
      console.log("OnClick2 clicked")
    }
  }
}
</script>
