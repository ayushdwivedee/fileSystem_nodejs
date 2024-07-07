const fs = require("fs");
 

const operation = process.argv[2];
const file = process.argv[3];
let content = process.argv[4];
 
if (content==undefined) {
  content = "";
}
switch (operation) {
  // complete the fillowing function.
  case "read":
    console.log(
      `This text is available in your test.txt file : ${fs.readFileSync(file)}`
    );
    break;
  case "append":
    fs.appendFileSync(file, content);
    console.log(`This text is appended in your test.txt file : ${content}`);
    break;
  case "rename":
    fs.renameSync(file, content);
    console.log(`This file is renamed as : ${content}`);
    break;
  case "delete":
    fs.unlinkSync(file);
    console.log(`This ${file} deleted`);
    break;
  case "create":
    fs.writeFileSync(file, content);
    console.log(`This ${file} created`)
    break;
    case "list":
        filesObj= fs.readdirSync(process.cwd(), { withFileTypes: true }); 
  
        console.log("\n Current directory files:"); 
        filesObj.forEach(file => { 
          console.log(file); 
        }); 
  console.log(`All Files and directory name got printed.`)
  break;
  default:
    console.log(`Invalid operation '${operation}'`);
}
