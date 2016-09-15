/**
 * Created by Mathieu on 23/06/2016.
 */
var express = require('express'),
    app = express();

app.use(express.static('./views'));

app.get('/', (request, response) =>{
    if (request.method == 'GET'){
        response.sendFile('index.html', {root:'views/'});
    }
});

app.get('*', function(req, res){
    res.status(404).sendFile('error.html', {root:'views/'});
});
app.listen(3000);