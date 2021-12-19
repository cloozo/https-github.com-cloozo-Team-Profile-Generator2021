let Manager = require("./lib/Manager");
let Engineer = require("./lib/Engineer");
let Intern = require("./lib/Intern");

function generateTeam(team){
 let html = [];

 html.push(team.filter(emp => emp.getRole() === "Manager")
  .map(manager) => manager.getHtml()
  .join(""));

  html.push(team.filter(emp => emp.getRole() === "Engineer")
  .map(engineer) => engineer.getHtml()
  .join(""));

  html.push(team.filter(emp => emp.getRole() === "Intern")
  .map(intern) => intern.getHtml()
  .join(""));
}
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
<div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>  
    <div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(team)}
        </div>
    </div>
</div>

</body>
</html>
    `;
};
