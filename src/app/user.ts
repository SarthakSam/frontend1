export class User{
    email: string;
    firstname: string;
    lastname: string;
    username: string;
    about: string;
    college: string;
    address: string;
    mobileno: string;

    constructor(email,firstname,lastname,username,about,college,address,mobileno){
           this.email=email;
           this.firstname=firstname;
           this.lastname=lastname;
           this.username=username;
           this.about=about;
           this.college=college;
           this.address=address;
           this.mobileno=mobileno;
    }
}