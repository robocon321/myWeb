const server = require('server');
const { get, post } = server.router;
 
// Handle requests to the url "/" ( http://localhost:3000/ )
server([
  get('/', aaa => 'Hello world!'),get('/next',bbb=>"Next page"),get('/page1',ccc=>"Page 1")
]);