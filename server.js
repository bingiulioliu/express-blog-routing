import express from 'express';

const app=express();

const PORT= process.env.PORT;
const URL= process.env.URL;




app.listen(PORT, (error) => {
    if(error) {
        console.error(error);
        return;
    }
    console.log(`Server avviato alla porta ${PORT}`);
    
})