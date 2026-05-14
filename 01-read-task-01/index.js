import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt({
        "message": "Type your url",
        "name": "URL",
    })
    .then((answers) => {
        const url = answers.URL;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('1st.png'));
        fs.writeFile("adrress links", url, ((err) => {
            console.log(err);
            console.log("saved!");
        }))
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error);

        } else {
            console.log("worked");

        }
    });