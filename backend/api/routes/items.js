//Yuval Zolotovitzky 205418981
const uuid = require('uuid');
const express = require('express');
const router = express.Router();

process.setMaxListeners(0);
const fs= require('fs');

let database=[]
router.get('/',getallitems);
function getallitems(request,response){
    response.send(database);
}

router.post('/',addItem);

function addItem(request,response){
    const item = request.body;
    const itemId = uuid.v4();
    // const itemWithId={id:itemId,...item};
    // database.push(itemWithId);
    const name=request.body.name;
    const description = request.body.description;
    const count =request.body.count;
    console.log('count:'+count);
    database.push({id:itemId,...item});
    response.send("Item added");
}

router.get('/:id',getItemById);
function getItemById(request,response){
    const { id } = request.params;
    const foundItem = database.find((item) => item.id===id);
    response.send(foundItem);
}

router.delete('/:id',deleteItem);
function deleteItem(request,response){
    const { id } = request.params;
    database = database.filter((item) => item.id!==id);
    response.send("Item has been deleted from database");
}

router.patch('/:id',updateItem);
function updateItem(request,response){
    const { id } = request.params;
    const { name, description, count} = request.body;
    const item = database.find((item) => item.id===id);
    if(name) item.name=name;
    if(description) item.description=description;
    if(count) item.count=count;
    response.send('Item has been updated');
}

router.post('/:id/:count', withdrawItem);
function withdrawItem(request,response){

    const  id  = request.params.id;
    const  count  = request.params.count;
    console.log("count : " + count);
    const item = database.find((item) => item.id===id);
    const current_amount = item.count;
    let new_amount = current_amount - count;
    if (new_amount<1){
        response.send("The new quantity is negative");
        new_amount = 0;
    }
    item.count = new_amount;
    response.send("Withdraw was made");
}

router.patch('/:id/:count', depositItem);
function depositItem(request,response){
    const  id  = request.params.id;
    const  count  = request.params.count;
    const item = database.find((item) => item.id===id);
    const current_amount = item.count;
    const new_amount = Number(current_amount) + Number(count);
    item.count = new_amount;
    console.log(item.count);
    response.send("Deposit was made");
}
module.exports = router;
