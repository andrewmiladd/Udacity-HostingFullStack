import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  /*
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,
  */

  username: "postgres",
  password: "postgres123",
  database: "udacityfullstack-db",
  host: "udacityfullstack-db.c944lgdehjcn.us-east-1.rds.amazonaws.com",
  port: 5432,

  dialect: "postgres",
  storage: ":memory:",
});
