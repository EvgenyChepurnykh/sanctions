<template>
  <div class="orders">
    
    <kendo-grid 
        :data-source="localDataSource"
        :groupable='true'
        :sortable='true'
        :pageable-refresh='true'
        :pageable-page-sizes='true'
        :pageable-button-count="5" >
        <kendo-grid-column field="OrderID" title="OrderID" :width="40"></kendo-grid-column>
        <kendo-grid-column field="Customer" title="Customer"></kendo-grid-column>
        <kendo-grid-column field="Product" title="Product" :width="80" ></kendo-grid-column>
        <kendo-grid-column field="Quantity" title="Quantity" :width="60"></kendo-grid-column>
        <kendo-grid-column field="Status" :width="120"></kendo-grid-column>
    </kendo-grid>

  </div>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
        localDataSource: [{
                "OrderID": 1,
                "Customer": "DE",
                "Product": "KES",
                "Quantity": 39,
                "Status": "Awaiting approval",
            },
            {
                "OrderID": 2,
                "Customer": "DE",
                "Product": "KIS",
                "Quantity": 20,
                "Status": "Awaiting approval",
            },
            {
                "OrderID": 3,
                "Customer": "RU",
                "Product": "KES",
                "Quantity": 17,
                "Status": "Awaiting approval",
            },
            {
                "OrderID": 4,
                "Customer": "RU",
                "Product": "KIS",
                "Quantity": 80,
                "Status": "Awaiting approval",
            }]
      }
  }
}
</script>