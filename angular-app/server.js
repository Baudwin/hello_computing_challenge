const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
let port  = process.env.PORT || 8080
const cors = require('cors')
const axios = require('axios')

app.use(cors({
    origin:'http://localhost:4200'
}))

app.use(express.static((__dirname, 'dist/angular-app/browser')))



app.get('/billing-addresses', async (req, res) => {
    try {
      const response = await axios.get('https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.get('/page-content', async (req, res) => {
    try {
      const response = await axios.get('https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error});
    }
  });

  app.get('*',  (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/angular-app/browser/index.html'))
})

app.listen(port, (req,res)=>{
    console.log(`Server is running on ${port}`)
})