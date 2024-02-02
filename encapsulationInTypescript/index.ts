

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
This throws an error because the insuranceLevel property is private and can only be accessed fom WITHIN the class it's from,
which is done purposely. Using the example of healthcare patients, usually you wouldn't want someone knowing what level of
insurance you have. Therefore this data is kept private and is not able to be accessed from outside the class itself.

The implications for this are writing more secure code, as well as writing more readable (and therefore maintainable and extendable) code. Nobody can poke around data they shouldn't be able to, and also people maintaining the Patient class will see how that peice of data relates to all the other code.
*/
console.log(Patient1.insuranceLevel);

//---------------------------------------------|

/*
Use of getters to access encapsulated data...

However there is still a way to get the insuranceLevel property from outside the class.

We coded in the method getInsuranceLevel() which returns the value of our insuranceLevel property. This method is public meaning we can call it from outside the class, but can access private 'Patient' data since it is still technically within the class.

Although this gives up some possible security since there is now a way to access this data, it's done so in a way that is more controllable than making the property public in the first place. If we had done that anyone would have free range to the property, and if accessed in this way our code will become overly complicated since there is no additional information other than the one line value change somewhere else in our code. With this new properly encapsulated method we can choose where the insuranceLevel variable is accessed from. And we can also control how, by only allowing a retrieval of the information through functionality implemented in the 'get' method (a.k.a getter) as opposed to allowing a reassignment as well.

This technique for encapsulating and then accessing encapsulated data is shown below.
*/

console.log(Patient1.getInsuranceLevel());















