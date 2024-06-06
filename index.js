const mockData = [
    {id:1, name: "entry1" },
    {id:2, name: "entry2"},
    {id:3, name: "entry3"}
];


const express = require('express');//responsible for setting up the 
const bodyParser = require('body-Parser');//responsible for parsinng the content that is takenfomr the database

const app = express();//app is set to the express database
const port = 3000;//port is set to 3000 where the server will be hosted

app.use(bodyParser.json())//body parse milidware is added to to parse json data

//implement a get request to get all the data
//this is simply a get request that has a request to grab all the data from the datbase and has a response to the request with returning all the data in that data base
app.get('/api/data', (req, res) => {
    setTimeout(() => {
        res.json(mockData)
    }, 1000) //set timeout of 1000 milli seconds or one second
});

//implement a post request to add a new id to the database
app.post('/api/data', (req,res) => {
    const newEntry = req.body;//establishinga variable of new entry where we will put thr creation of a new entry to be placed in the database
    setTimeout(() => {
        mockData.push(newEntry);//using the push method to push the new entry to the database called mock data
        res.status(201).json(newEntry).send("Everything is ok and a new id has been created!"); //sends back http code 201 to show everything is ok and it has been created
    }, 1000) //set timeout of 1000 milliseconds or one second
})

//implement a put request to update the data in the database
app.put('/app/data/:id', (req,res) => {
    const id = parseInt(req.params.id);//establishing a variable called id to find the id in the and converts it over to as integer
    const updatedEntry = req.body;// establishing a variable callled update entry to process the put request

    setTimeout(() => {
        //using for each method to iterate throught the database by id and entry and then run conditional statement to check if its their.
        mockData.forEach(entry => {
            if(entry.id === id){
                entry.name = updatedEntry.name;
            }
        });
    
        res.json(updataEntry);
    }, 1000)// set timeout of 1000 milliseconds or 1 second
})

//implement a delete request to remove the data from the database
app.delete('/app/data/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const indexToDelete = mockData.findIndex(entry => entry.id === id);// returns the index of the first entry.id element that meets the criterial.

    //condtional statement to check if the entry exists in mock data database
    setTimeout(() => {
        if(index !== -1){
            mockData.splice(index,1);//if the entry exists in thedata base remove it from the database suing the slice method
            res.status(204);//send bacj a succesful 204 status code with no content on the page
        }else{
            res.status(404).json({error:'Entry not found'});//if the entry sint found it will send back a 404 
        }
        res.json(indexToDelete);
    }, 1000) // set timeout of 1000 milliseconds or 1 second.
});