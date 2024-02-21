

class Patient {
    
    //Only entities from within the class can access this.
    //And using techniques described below we can allow access but in a very customizable way
    private insuranceLevel: string;

    //Any entity can access this variable
    public name: string;
    
    constructor(insuranceLevel: string, name: string) {
        this.insuranceLevel = insuranceLevel;
        this.name = name;
    }
    
    //method set as private so nobody random from outside the class can use it at will, and to better signal format of the class
    private setInsuranceLevel(newInsurance: string): Number {
        this.insuranceLevel = newInsurance;
        return 0;
    }
    
    //method set as public so people we choose can access the encapsulated
    //data from outside the class
    public getInsuranceLevel(): string { 
        return this.insuranceLevel;
    }

    public setName(newFirstName: string): Number {
        this.name = newFirstName;
        return 0;
    }

    public getName(): string {
       return this.name; 
    }
}

//Defining our patient with initial insuranceLevel of First Class and name of Billy
let Patient1: Patient = new Patient("First Class", "Billy");

//---------------------------------------------|
/*
    One of the main implications for this is writing more secure code, since you can control who or what has access and how. Other benefits are more readable, maintainable, and extendable code, which stem from
    the information provided by access modifiers. Depending on the access modifier of a method or attribute, a developer can more easily tell what a method or attribute's role is in it's class.
*/
/*
    This throws an error because the insuranceLevel property is private and can only be accessed fom WITHIN the class it's from,
    which is done purposely. Using the example of healthcare patients, usually you wouldn't want someone knowing oer having uncontrolled access to what level of
    insurance you have. Therefore this data is kept private and is not able to be accessed from outside the class itself.
*/
console.log(Patient1.insuranceLevel);
//---------------------------------------------|
/*
    Use of getters to access encapsulated data as essentially readonly...
        -> Sidenote: Typescript does have a readonly modifier, make use of that if you want the data readonly and unmodifiable.

    However there is still a way to get the insuranceLevel property from outside the class, which would be through the method getInsuranceLevel() which returns the value of our insuranceLevel property. 
    This method has the public modifier meaning we can call it from outside the class and it will return the patient's insurance level even though it's private. This works because the 
    method 'getInsuranceLevel()' has access to private properties inside the class, but can still be called from outside since it is public. It's like a hook into the 
    encapsulated data (class). You can also think of it as looking through a peephole of a chest where the peephole is our getInsuranceLevel() method, and the chest
    is our class that holds the data inside.
*/

//Printing the output of our 'hook' or 'peephole' method which allows us to view the data inside the chest (class)
console.log(Patient1.getInsuranceLevel());















