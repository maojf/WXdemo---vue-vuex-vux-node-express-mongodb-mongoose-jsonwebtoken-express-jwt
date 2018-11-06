if(process.env.NODE_ENV == 'development'){
  require('./config-dev')
}else if(process.env.NODE_ENV == 'production'){
  require('./config-prod')
}
export default servicePath