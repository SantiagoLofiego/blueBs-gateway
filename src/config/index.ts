import dotenv from 'dotenv'
dotenv.config()

const config = {
  server: {
    port: process.env.SERVER_PORT
  },
  data:{
    user:{
      Mysql:{
        host: process.env.USER_DB_HOST,
        username: process.env.USER_DB_USERNAME,
        password: process.env.USER_DB_PASSWORD,
        database: process.env.USER_DB_DATABASE
      }
    },
    microService:{
      file:{
        filePath:"./db.json"
      }
    }
  }
}

export default config;
