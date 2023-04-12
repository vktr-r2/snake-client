const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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