const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, mgrOfficeNumber) {
    super(name, id, email);
    // this.role = "Manager";
    this.mgrOfficeNumber = mgrOfficeNumber;
  }

  getRole() {
    return "Manager";
  }

  getMgrOfficeNumber() {
    return this.mgrOfficeNumber;
  }
  /*  getName() {
    return this.name;
  }
 */
  getHtml() {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${this.getMgrOfficeNumber()} </li>
        </ul>
    </div>
</div>
        `;
  }
}
module.exports = Manager;
