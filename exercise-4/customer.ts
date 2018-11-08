export class Customer {
    private firstName:string;
    private lastName:string;
    private Age:number;

    public GetAge(){
        console.log(`Your age is: ${this.Age}`)
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);

    }

    constructor(firstName: string, lastName:string, Age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
}

let customer = new Customer("John", "Smith", 10);
customer.greeter();

