let help =require("./cmd/help");
let arr = require("./cmd/arrange");
let tree =  require("./cmd/tree");
let cmd = process.argv.slice(2);


switch (cmd[0]){
    case "help":help.help();
                break;
    case "arrange":
                arr.arrange(cmd[1]);
                break;
    case "view":tree.tree(cmd[1]);
                 break;
     default:console.log("Please enter valid command tree help for help!");
     break;

            }
