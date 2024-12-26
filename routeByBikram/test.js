import express from 'express';
import cors from 'cors'

const app = express();


app.use(cors());

app.get('/',(req,res)=>{
    res.send('server is ready');
})

app.get('/api/jocks',(req,res)=>{
   
        const jocks=[
            { 
                id:1,
                title:'first jocks',
                jock:'this is the first jocks'
            },
            { 
                id:2,
                title:'second jocks',
                jock:'this is the second jocks'
            },
            { 
                id:3,
                title:'third jocks',
                jock:'this is the third jocks'
            },

        ];
        res.send(jocks);
    
})

const port = process.env.PORT ;

app.listen(port, ()=>{
    console.log(`server is running at port numbet ${port}`)
})