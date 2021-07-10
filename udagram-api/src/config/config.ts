import dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`, //"postgres", //`${process.env.RDS_USERNAME}`, 
  password: process.env.POSTGRES_PASSWORD,//"postgres123", //process.env.RDS_PASSWORD, 
  database: process.env.POSTGRES_DB, // "udacityfullstack-db",//process.env.RDS_DB_NAME, //,
  port: Number(process.env.PORT), //5432, //Number(process.env.RDS_PORT), 
  host: process.env.POSTGRES_HOST, //"udacityfullstack-db.c944lgdehjcn.us-east-1.rds.amazonaws.com", //process.env.RDS_HOSTNAME, 
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
