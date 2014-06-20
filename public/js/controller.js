/**
 demo.js
 This provides the model and controller for the shopping list app!
 It is written entirely in JavaScript with no use of AngularJS
 but it does just JQuery to handle the ajax calls in a browser independent manner...
 VERSION 1.0.1 -- here is where we start adding some functionality
 **/



    // first create the model
var myList = new ShoppingList();

// redraw the table using the current model
function refreshTable(){    
            var rows = "";
            var myItems = myList.items;
            var len = myItems.length;
            for(var n=0; n<len; n++){ 
                var item = myList.items[n];
                rows = rows + itemToRow(item);
            }
            
            var itemTableBody = document.getElementById("itemTableBody");
            itemTableBody.innerHTML = rows;
            
}

// convert an item into an HTML tr element
function itemToRow(item){
    var row = 
    "<tr><td>"+item.action+
    "</td><td>"+item.price+
    "</td><td>"+item.quantity+
    "</td><td>"+item.quantity * item.price +
    "</td><td> <input type='checkbox' sid='"+item.id+"' onclick='editItem(this)'> "+
    "</td><td> <input type='checkbox' sid='"+item.id+"' onclick='purchaseItem(this)'> "+
    "</td><td> <input type='checkbox' sid='"+item.id+"' onclick='handleDeleteItem(this)'> "+  
    "</td></tr>";
    return row;
}

function handleDeleteItem(element){
    console.log("deleting item");
    console.log(" with id "+element.getAttribute("sid"));
    myList.deleteElement(element.getAttribute("sid"));

}

function addItem(element){
    var element = document.getElementById("newItemName");
    console.log("new item "+element.value);
    myList.addElement({action:element.value,price:0,quantity:0});
}

function purchaseItem(element){
    console.log("purchasing item");
}

function editItem(element){
    
}


initEventHandlers = function() {
    document.getElementById("refreshBtn").onclick = refreshTable;
}

function start() {
    myList.loadModel();
    console.log("myList = "+JSON.stringify(myList));
    initEventHandlers();
}

$(document).ready(start);
