
const generateManager =(data)=>{
    //data.name data.id data.email data.officeNumber
    return ``
}
const generateCards = (data) => {

    //data will be an array of Employees (Manager/Intern/Engineer)
    data.forEach(element => {
        //generate a card based on role 
        if(element.getRole() === "Manager"){
            generateManager(data);
        }
    });
}



const generateHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    <body>
        ${generateCards(data)}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = generateHTML;