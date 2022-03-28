const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + '/date.js')

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

    const items = ['Buy Food',];
    const workItems = [];


app.get('/',function (req,res){

    const day = date.getDate()
    // let dayz = date.getDay()

    res.render('list',{listTitle: day, newListItems: items,})
})

    app.post('/',function(req,res){
        
        let item = req.body.newItem
        if(req.body.button === 'Work'){
            workItems.push(item)
            res.redirect('/work')
        }else{
        items.push(item)

        res.redirect('/') //redirect btrj3na lal awal
    }
})

app.get('/work',function(req,res){
    res.render('list',{listTitle: 'Work List',newListItems: workItems})
})

// app.post('/',function(req,res){
//     let item = req.body.newItem
//     workItems.push(item)

//     res.redirect('/work')
// })
app.get('/about',function(req,res){
    res.render('about')
})





app.listen(process.env.PORT || 3000, function(){
    console.log('server is running!')
})