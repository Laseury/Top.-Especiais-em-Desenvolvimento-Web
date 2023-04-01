const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

//Configure o template Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

//Parse para leitura do Body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//adicionando css
app.use(express.static('public'))

app.get('/users/add', (req, res) =>{
    res.render('userform')
})

app.post('/users/save', (req, res)=>{
    const nome = req.body.nome
    const tipo = req.body.tipo
    const volume = req.body.volume
    const user = {nome:nome, tipo:tipo, volume:volume}
    res.render('viewuser', {user: user} )

    //para fins de estudo para saber se está tudo correto, irei manter o console log.
    console.log(`O nome do livro é ${nome}, tipo do livro é ${tipo} e seu volume é ${volume}`)
})

app.get('/', (req, res) =>{
    res.render('home')
})

app.use(function (req, res) {
    res.status(404).render('404')
})

app.listen(port,()=>{
    console.log('Servidor Inicializado');
})