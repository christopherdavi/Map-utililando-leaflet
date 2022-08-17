const  express = require('express');

const app = express();

const bookRouter = express.Router();

const port = process.env.PORT || 3000;

bookRouter.route('/casa')

.get((req,res)=>{
  let x={ id:1,nombre:'Christopher',latlng:[-0.2611978,-78.5210102] };

  res.json(x);
});

app.use('/api',bookRouter);


app.get('/',(req,res)=>{
    res.send('api');
});

app.listen(port,()=>{
    console.log(`puerto ${port}`);
});
