import app from './app'
import './database'

app.listen(app.get('port'))

console.info('>'.repeat(40))
console.info('💻  AGILE API TEST ALIVE')
console.info(`📡  PORT: ${app.get('port')}`)
console.info('>'.repeat(40) + '\n')