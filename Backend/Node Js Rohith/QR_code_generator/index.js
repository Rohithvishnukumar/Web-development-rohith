import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Enter anything to convert into QR code",
            name: "raw_text"
        }
    ])

    .then((answers) => {

        console.log(answers.raw_text);
        var qr_svg = qr.image(answers.raw_text);
        qr_svg.pipe(fs.createWriteStream(`generated.png`));
    })

    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });







