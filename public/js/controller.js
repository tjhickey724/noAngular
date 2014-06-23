/**
 demo.js
 This provides the model and controller for the shopping list app!
 It is written entirely in JavaScript with no use of AngularJS
 but it does just jQuery to handle the ajax calls in a browser independent manner...
 and it uses jQuery to access and modify the HTML file index.html
 
 VERSION 1.0.1 -- here is where we start adding some functionality
 **/

var shoppingApp = (function($) {


    // first create the model
    var myList = new ShoppingList();


    function handleDeleteItem(element) {
        console.log("deleting item");
        console.log(" with id " + element.getAttribute("sid"));
        myList.deleteElement(element.getAttribute("sid"));

    }

    function addItem(element) {
        var element = document.getElementById("newItemName");
        console.log("new item " + element.value);
        myList.addElement({
            action: element.value,
            price: 0,
            quantity: 0
        });
    }

    function purchaseItem(element) {
        console.log("purchasing item");
    }

    function editItem(element) {

    }
    

    function refreshTable() {
        shoppingView.refreshTable(myList.items);
    }

    initEventHandlers = function() {
        $("#refreshBtn").on("click", refreshTable());
    }
    
    function updateTitle(username){
        var user = myList.user;
        var newTitle = myList.user + " Super Shopping List";
        $("#title").html(newTitle);
    }

    function start() {
        myList.loadModel();
        console.log("myList = " + JSON.stringify(myList));
        initEventHandlers();
        updateTitle(myList.user);
        updateTotalPrice

    }

    // here is were we decide what is visible to the outside!
    shoppingApp = {
        start: start,
        addItem: addItem,
        handleDeleteItem: handleDeleteItem,
        refreshTable: refreshTable
    }

    return (shoppingApp);

}(jQuery));



