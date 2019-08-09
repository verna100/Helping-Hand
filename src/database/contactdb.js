var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "helpinghands_db"
});

// This tells you when the db is connected and calls the create contact function
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createContact();
  });
  
  function createContact() {
    console.log("Inserting a new contact...\n");
    var query = connection.query(
      "INSERT INTO contact_information SET ?",
      {
        full_name: "Tester Test",
        email: "tester@email.com",
        comm_sugg: "This is me testing the database connection"
      },
      function(err, res) {
        console.log(res.affectedRows + " Contact inserted!\n");
        // Call updateContact AFTER the INSERT completes
        updateContact();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function updateContact() {
    console.log("Updating all contacts...\n");
    var query = connection.query(
      "UPDATE contact_information SET ? WHERE ?",
      [
        {
          email: "tester@email.com"
        },
        {
          full_name: "Tester Test"
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " contact information updated!\n");
        // Call deleteContact AFTER the UPDATE completes
        deleteContact();
      }
    );
  
//     // logs the actual query being run
    console.log(query.sql);
  }
  
  function deleteContact() {
    console.log("Deleting first contact...\n");
    connection.query(
      // "DELETE FROM contact_information WHERE ?",
      {
        id: 1
      },
      function(err, res) {
        // console.log(res.affectedRows + " Contact deleted!\n");
        // Call readContact AFTER the DELETE completes
        readContact();
      }
    );
  }
  
  function readContact() {
    console.log("Selecting all contact_information...\n");
    connection.query("SELECT * FROM contact_information", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  