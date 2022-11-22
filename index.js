// import express
import express from 'express';
//create a new server
const app = express();
// define port 
const PORT = 3030;



app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}`);
});


// CREATE MY ROUTES HERE 