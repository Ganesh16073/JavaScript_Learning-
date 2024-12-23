const user={ // Object Literals
    username:"Ganesh",
    LoginCount:0,
    signedIn:true,
    getUserDetails:function()
    {
        console.log(this.LoginCount);
    }
}

console.log(user.getUserDetails());
function userDet(name,id,logedin)
{
    this.name=name
    this.id=id
    this.logedin=logedin
    return this
}
const user1=userDet("GAnesh",1,true) // without new Every thing is printed
console.log(user1);
const user2=new userDet("GAnesh",1,true) // With new keyword we can get instence
console.log(user2);
const user3=new userDet("GAnesh",NaN,true) // With new keyword we can get instence
console.log(user3);

