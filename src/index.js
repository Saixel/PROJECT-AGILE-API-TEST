import app from './app'
import './database'

app.listen(app.get('port'))

console.log('Server listen on port', app.get('port'))
