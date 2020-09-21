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
    if (count>0)
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
    const foundItem = database.find((item) => item.id===id);
    database = database.filter((item) => item.id!==id);
    response.send(foundItem);
}

router.patch('/:id',updateItem);
function updateItem(request,response){
    const { id } = request.params;
    const { name, description, count} = request.body;
    const item = database.find((item) => item.id===id);
    if(name) item.name=name;
    if(description) item.description=description;
    if(count) item.count=count;
    response.send(item);
}

router.post('/:id/:count', withdrawItem);
function withdrawItem(request,response){
    const  id  = request.params.id;
    const  count  = request.params.count;
    let current_amount;
    console.log("count : " + count);
    let item = database.find((item) => item.id===id);
    if (item == undefined ){
        response.send(item);
    }
    else{
        let tempItem=item;
        tempItem.description="";
        current_amount = item.count;
        let new_amount = current_amount - count;
        if(new_amount<0) {
            item.count = current_amount;
            tempItem.description="negative item"
            console.log("The item is negative");
            response.send(tempItem);
        }
        else {
            item.count = new_amount;
            response.send(item);
        }
    }
}

router.patch('/:id/:count', depositItem);
function depositItem(request,response){
    const  id  = request.params.id;
    const  count  = request.params.count;
    let current_amount;
    const item = database.find((item) => item.id===id);
    if (item!=undefined)
         current_amount = item.count;
    const new_amount = Number(current_amount) + Number(count);
    if (item != undefined)
        item.count = new_amount;
    else{
        console.log('item not found');
    }
    response.send(item);
}
module.exports = router;
