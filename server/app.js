const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const posts = [
  {name:'User1', text: 'USER SAYS', id:'1'},
  {name:'User2', text: 'USER SAYS', id:'2'},
  {name:'User3', text: 'USER SAYS', id:'3'},
  {name:'User4', text: 'USER SAYS', id:'4'},
  {name:'User5', text: 'USER SAYS', id:'5'},
  {name:'User6', text: 'USER SAYS', id:'6'},
  {name:'User7', text: 'USER SAYS', id:'7'},
  {name:'User8', text: 'USER SAYS', id:'8'},
  {name:'User9', text: 'USER SAYS', id:'9'},
  {name:'User10', text: 'USER SAYS', id:'10'}
];

io.on('connection', socket => {
  console.log('start socket')
  socket.emit('loadPosts', posts)
  socket.on('createMessage', data => {
    for(let i = 0; i<posts.length;i++){
      if (data.id == posts[i].id){
        posts.splice(i,1)
      }
    }
    io.emit('loadPosts', posts)
  });
  socket.on('updatePost', data =>{
    for(let i = 0; i<posts.length;i++){
      if (data.id == posts[i].id){
        posts[i] = data
      }
    }
    io.emit('loadPosts', posts)
  })
  socket.on('createPost', data =>{
    console.log(data)
    posts.push(data)
    io.emit('loadPosts', posts)
  })
});

module.exports = {
  app,
  server
};
