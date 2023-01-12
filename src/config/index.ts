import dotenv from 'dotenv'
dotenv.config()

const config = {
  server: {
    port: process.env.SERVER_PORT
  },
  data:{
    userMysql:{
      host: process.env.USER_DB_HOST,
      username: process.env.USER_DB_USERNAME,
      password: process.env.USER_DB_PASSWORD,
      database: process.env.USER_DB_DATABASE
    }
  }
}

export default config;
