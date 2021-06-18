import dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.RDS_USERNAME}`, //`${process.env.POSTGRES_USERNAME}`,
  password: process.env.RDS_PASSWORD, //process.env.POSTGRES_PASSWORD,
  database: process.env.RDS_DB_NAME, //process.env.POSTGRES_DB,
  port: Number(process.env.RDS_PORT), //Number(process.env.PORT),
  host: process.env.RDS_HOSTNAME, //process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
