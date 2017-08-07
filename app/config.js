module.exports ={
    port:  process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shoping',
    SECRET_TOKEN: 'TOKEN-COLOCAR-CODIGO-HASH'

}