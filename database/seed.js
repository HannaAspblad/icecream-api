const db = require("./connection.js")

db.run(
  `INSERT INTO "Flavours" ("Name")
VALUES ("Strawberry"), ("Pear"),("Vanilla"),("Chocolate"), ("Blueberry")`,
  (err) => {
    err && console.log(err)
  }
)

db.run(
  `INSERT INTO "Users" ("Email")
VALUES
("user1@example.com"),
("user2@example.com"),
("user3@example.com"),
("user4@example.com"),
("user5@example.com"),
("user6@example.com"),
("user7@example.com"),
("user8@example.com")
`,

  (err) => {
    err && console.log(err)
  }
)
