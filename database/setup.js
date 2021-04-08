const db = require("./connection.js")

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS "Votes"`, (err) => {
    err && console.log(err)
  })
  db.run(`DROP TABLE IF EXISTS "Mixes"`, (err) => {
    err && console.log(err)
  })

  db.run(`DROP TABLE IF EXISTS "Flavours"`, (err) => {
    err && console.log(err)
  })

  db.run(`DROP TABLE IF EXISTS "Users"`, (err) => {
    err && console.log(err)
  })

  db.run(
    `CREATE TABLE "Flavours" (
      "Flavour_Id"	INTEGER NOT NULL UNIQUE,
      "Name"	TEXT NOT NULL,
        PRIMARY KEY("Flavour_Id" AUTOINCREMENT))`,
    (err) => {
      err && console.log(err)
    }
  )

  db.run(
    `CREATE TABLE "Mixes" (
            "Name"	TEXT NOT NULL UNIQUE,
            "Mix_Id"	INTEGER NOT NULL UNIQUE,
            "Flavour_1"	INTEGER NOT NULL,
            "Flavour_2"	INTEGER NOT NULL,
            "Flavour_3"	INTEGER,
            "Flavour_4"	INTEGER,
            PRIMARY KEY("Mix_Id" AUTOINCREMENT),
            FOREIGN KEY("Flavour_2") REFERENCES "Flavours"("Flavour_Id"),
	          FOREIGN KEY("Flavour_1") REFERENCES "Flavours"("Flavour_Id"),
	          FOREIGN KEY("Flavour_4") REFERENCES "Flavours"("Flavour_Id"),
	          FOREIGN KEY("Flavour_3") REFERENCES "Flavours"("Flavour_Id") 
        )`,
    (err) => {
      err && console.log(err)
    }
  )

  db.run(
    `CREATE TABLE "Users" (
      "User_Id"	INTEGER NOT NULL UNIQUE,
      "Email"	TEXT NOT NULL UNIQUE,
      PRIMARY KEY("User_Id" AUTOINCREMENT)
    )`,
    (err) => {
      err && console.log(err)
    }
  )

  db.run(
    `CREATE TABLE "Votes" (
      "Vote_Id"	INTEGER NOT NULL UNIQUE,
      "User_Id"	INTEGER NOT NULL UNIQUE,
      "Mix_Id"	INTEGER NOT NULL,
      PRIMARY KEY("Vote_Id" AUTOINCREMENT),
      FOREIGN KEY("Mix_Id") REFERENCES "Mixes"("Mix_Id"),
      FOREIGN KEY("User_Id") REFERENCES "Users"("User_Id")
    )`,
    (err) => {
      err && console.log(err)
    }
  )
})
