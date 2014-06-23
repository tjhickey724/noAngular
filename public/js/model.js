/**
  The ShoppingList class has all the methods for downloading the model
  from the server, updating the model (and sending the updates to the server)
  and refreshing the model by pulling down the server info.
  
  This is a little ugly because the Model code makes calls back to the app to
  redraw the view when it makes changes, but we'll live with that for now!
  
**/

function ShoppingList() {
    this.user = "Tim";
    this.cutoff = 0;
    this.items = [];

};



ShoppingList.prototype.loadModel = function() {
    var myList = this;
    
    // send request to the server for the items in the list
    $.ajax({
        type: "GET",
        url: "/showall.json",
    }).done(function(items) {
        myList.items = items;
        shoppingView.refreshView(myList);
    });
};

ShoppingList.prototype.getElement = function(id){
    var item;
    var i;
    for(i=0; i<this.items.length; i++){
        item = this.items[i];
        if(item.id == id){
            return(item);
        }
    }
};

ShoppingList.prototype.addElement = function(newItem){
    console.log("sending "+JSON.stringify(newItem));
    var myList = this;
    $.ajax({
        type: "POST",
        url: "/model",
        data: JSON.stringify(newItem),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function(items) {
        myList.loadModel();
    });
}

ShoppingList.prototype.updateElement = function(id,newItem){
    var myList = this;
    $.ajax({
        type: "PUT",
        url: "/model/"+id,
    }).done(function(items) {
        myList.loadModel();
    });
}

ShoppingList.prototype.deleteElement = function(id){
    var myList = this;
    $.ajax({
        type: "DELETE",
        url: "/model/"+id,
    }).done(function(items) {
        myList.loadModel();
    });
}

ShoppingList.prototype.totalPrice = function(){
    var total=0;
    var item;
    var i;
    for(i=0; i<this.items.length; i++){
        item = this.items[i];
        if (item.purchased){
            total += item.price*item.quantity;
        }
    }
    return total;
}
    