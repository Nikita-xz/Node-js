const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// defining paths for express config
const publicDiectoryPath= path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templets/views')
const partialsPath = path.join(__dirname, '../templets/partials')
//setup handlebars engine and xiews location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//setup static directory to server
app.use(express.static( publicDiectoryPath))

app.get('', (req, res) =>{
    res.render('index', {
        title: 'weather',
        name: 'Nikita K'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About World Wonders',
        name: 'Nikita'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'Please contact for help.',
        title: 'Help',
        name: 'Nikita'
    })
})
app.get('', (req, res) => {
    res.send('<h1>about</h1>')

})

//app.get('/help',(req, res) => {
    //res.send([{
     //   name: 'Nikita',     
   // }, {
   //     name: 'Pratiksha'
   // }])
//})


//app.get('/about', (req, res) => {
 //   res.send('<h1>Welcome</h1>')
//})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Dharwad'
    })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
      title: '404',
      name: 'Nikita',
      errorMessage: 'Help message not found.'
  })
})

app.get('*', (req, res)=> {
  res.render('404', {
      title: '404',
      name: 'Nikita',
      errorMessage: 'Page not found'
  })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})