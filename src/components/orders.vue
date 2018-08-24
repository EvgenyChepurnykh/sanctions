<template>
  <div class="orders">
    <kendo-datasource ref="remoteDataSource"
                      :transport-read-url="'http://localhost:5000/api/orders'"
                      :transport-read-data-type="'json'"
                      :transport-cross-domain = 'true'
                      :transport-read-type="'GET'"
                      :page-size='20'>
    </kendo-datasource>
    <kendo-grid
        :data-source-ref="'remoteDataSource'"
        :groupable='true'
        :filterable='true'
        :sortable='true'
        :selectable="'row'"
        :navigatable='true'
        :pageable-refresh='true'
        :pageable-page-sizes='true'
        :pageable-button-count="5"
        :resizable = 'true'
        :change="onChange"
         >
        <kendo-grid-column field="requestId" title="OrderID" :width="40"></kendo-grid-column>
        <kendo-grid-column field="requestStatusCode" title="Status" :width="40"></kendo-grid-column>
        <kendo-grid-column field="orderNumber" title="OrderNumber" :width="40"></kendo-grid-column>
        <kendo-grid-column field="partNumber" title="PartNumber" :width="60"></kendo-grid-column>
        <kendo-grid-column field="quantity" title="Quantiy" :width="30" ></kendo-grid-column>
        <kendo-grid-column field="endUserDiscount" title="EUD" :width="30"></kendo-grid-column>
        <kendo-grid-column field="amount" title="Amount" :width="30"></kendo-grid-column>
        <kendo-grid-column field="partnerDiscount" title="PD" :width="40"></kendo-grid-column>
        <kendo-grid-column field="dueTo" title="DueTo" :width="40"></kendo-grid-column>
        <kendo-grid-column field="currency" title="Currency" :width="40"></kendo-grid-column>
        <kendo-grid-column field="deliveryDate" title="DeliveryDate" :width="60"></kendo-grid-column>
        <kendo-grid-column field="purchaseOrder" title="PO" :width="40"></kendo-grid-column>
    </kendo-grid>

  </div>
</template>

<script>
export default {
  name: 'Orders',
  methods :{
      onChange : function(e){
          var row = e.sender.dataItem(e.sender.select());
          console.log(row.requestId);
          this.selectedRequestId=row.requestId
          this.$emit('onSelectedRow',this.selectedRequestId) //send request id to parent control
      }
  },
  data () {
    return {
        localDataSource: [{
                "requestId": 1,
                "requestStatusCode": "Initial",
                "orderNumber": "423232-3233-323",
                "partNumber": 72,
                "quantity": 100,
                "endUserDiscount": 10,
                "amount": 456,
                "partnerDiscount" : 45,
                "dueTo" : 17,
                "deliveryDate" : "14.01.1977",
                "purchaseOrder": "Nothing"
            },
            {
                "requestId": 2,
                "requestStatusCode": "Initial",
                "orderNumber": "423232-3233-323",
                "partNumber": 72,
                "quantity": 100,
                "endUserDiscount": 10,
                "amount": 456,
                "partnerDiscount" : 45,
                "dueTo" : 17,
                "deliveryDate" : "14.01.1977",
                "purchaseOrder": "Nothing"
            }],
        selectedRequestId : -1
      }
  }
}
</script>
