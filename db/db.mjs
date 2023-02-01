import { Sequelize } from "sequelize";

const sequelize = new Sequelize("rapdb", "appdev", "dev123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("connected successfully");
  } catch (error) {
    console.log(`Error while connecting the database ${error}`);
  }
}

const sync = () => {
  connect();
  sequelize
    .sync()
    .then(() => {
      console.log("Product table created successfully");
    })
    .catch((error) => {
      console.error("error", error);
    });
};

sync();

export default sequelize;
