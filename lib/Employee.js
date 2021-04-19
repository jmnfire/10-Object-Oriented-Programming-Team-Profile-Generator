class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //these methods are classed GETTER functions
    getName() {
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee"
    }
}


//const newbie = new Employee("Tim", 2, "heklp@mgail.com")

//newbie.name //this is no good cause we can change Tim's directly

//newbie.name = "Tom"

module.exports = Employee;