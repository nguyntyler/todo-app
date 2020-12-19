# First Steps

To kick start your project, first delete the .git file located in the root directory. Run:

> git init

... to make it your own git repository.

Then run:

> npm i

This will install all necessary files.

---

# Sequelize Setup

To start up Seqeulize, run:

> npx sequelize-cli init

This will create the following directories: config, migrations and models.

You will need to set up a .env file which will hold the sensitive information that will connect this app to ElephantSQL. The **dist.env** file is there for reference.

Set the **SESSION_SECRET** to any string of your choice.

The sequelize init will create a models/index.js, you will need to edit this file to point to config.js NOT config.json.

Find the **_index.js_** file inside the models directory and change the ‘config.json’ file into:

```js
const config = require(__dirname + "/../config/config.js")[env];
```

This is what the **_config.js_** file should look like:

```js
module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "postgres",
	},
};
```

---

# Model Creation

To create a sequelize model, run:

> npx sequelize-cli model:generate --name {NameOfModel} --attributes {ColumnName}:{DataType},{ColumnName}:{DataType}

Make another if your project needs another model. Run once done:

> npx sequelize-cli db:migrate
