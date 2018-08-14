<template>
  <div class="commands">
    <kendo-button name="Confirm" @click="onClick1" class='k-primary' style="width:150px">Confirm</kendo-button>
    <kendo-button name="Recall" @click="onClick2" class = 'k-primary' style="width:150px">Recall</kendo-button>
  </div>
</template>


<script>
export default {
  props:['requestId'],
  name: 'Commands',
  data () {
    return {

    }
  },
  methods:{
    onClick1 : function(ev){
      if (this.requestId == -1)  return;
      alert("Confirm for requestId = "+this.requestId)
    },
    onClick2 :function(ev){
      alert("Recall for requestId = "+ this. requestId)
    }
  }
}
</script>
