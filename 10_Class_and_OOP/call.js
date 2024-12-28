function setName(name)
{
    this.name=name
}

function createuser(username,email,password)
{ 
    // setName(username) //this will not initizal in this object
    setName.call(username) // this will hold refrence
    setName.call(this,username)//to current object this is pased to function to initilized 
    this.email=email
    this.password=password
}

const memeber=new createuser("dhruv","@gamil","123@pass")
console.log(memeber);
