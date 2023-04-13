const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //Event triggers upon connection
  conn.on("connect", () => {
    console.log("You sneaky Snek!  You're connected ...");    //Confirm we're connected
    conn.write("Name: Vik");    //Write name to server
  });

  //Event triggers upon server sending us data AKA message
  conn.on("data", (data) => {
    console.log("Server says: ", data);   //Console.log the message
  });
  
  return conn;
};

module.exports = {connect};