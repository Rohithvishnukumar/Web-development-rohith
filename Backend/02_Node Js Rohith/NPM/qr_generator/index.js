import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        name : "URL",
        message : "Enter your prompt to convert to qr code"
    }
  ])
  .then((answers) => {

    // console.log(answers.URL)

    var qr_svg = qr.image(answers.URL , { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(`./Generated/${answers.URL}.png`));
    fs.appendFile(`./text_gen/textfile.txt` , `${answers.URL}\n` , function(err){
      if(err){
        throw err;
      }
      else{
        console.log("Successful")
      }
    })
 
    var svg_string = qr.imageSync(`./Generated/${answers.URL}.png` , { type: 'png' });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });