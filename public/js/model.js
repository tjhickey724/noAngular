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
        refreshTable();
    });
}

ShoppingList.prototype.getElement = function(id){
    for(var item in this.items){
        if(item.id == id){
            return(item);
        }
    }
}

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
    