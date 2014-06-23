/**
 The shoppingView is responsible for updating all of the HTML
 It is called by the shoppingApp only and the only thing it calls is jQuery
**/

var shoppingView = (function($){
    
    // redraw the table using the current model
    function refreshTable(myItems){    
                var rows = "";
                var len = myItems.length;
                for(var n=0; n<len; n++){ 
                    var item = myItems[n];
                    rows = rows + itemToRow(item);
                }

                var itemTableBody = $("#itemTableBody").html(rows);

    }

    // convert an item into an HTML tr element
    function itemToRow(item){
        var row = 
        "<tr><td>"+item.action+
        "</td><td>"+item.price+
        "</td><td>"+item.quantity+
        "</td><td>"+item.quantity * item.price +
        "</td><td> <input type='checkbox' sid='"+item.id+"' onclick='shoppingApp.editItem(this)'> "+
        "</td><td> <input type='checkbox' sid='"+item.id+"' onclick='shoppingApp.purchaseItem(this)'> "+
        "</td><td> <input type='checkbox' sid='"+item.id+"' onclick='shoppingApp.handleDeleteItem(this)'> "+  
        "</td></tr>";
        return row;
    }
    
    shoppingView={
        refreshTable: refreshTable
    };
    
    return(shoppingView);
    
}(jQuery));