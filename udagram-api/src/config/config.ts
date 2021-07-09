import dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `postgres`, //`${process.env.RDS_USERNAME}`, //`${process.env.POSTGRES_USERNAME}`,
  password: "postgres123", //process.env.RDS_PASSWORD, //process.env.POSTGRES_PASSWORD,
  database: "udacityfullstack-db",//process.env.RDS_DB_NAME, //process.env.POSTGRES_DB,
  port: Number(5432), //Number(process.env.RDS_PORT), //Number(process.env.PORT),
  host: "udacityfullstack-db.c944lgdehjcn.us-east-1.rds.amazonaws.com", //process.env.RDS_HOSTNAME, //process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
