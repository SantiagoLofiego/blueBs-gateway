class User {   
    
  private id:number;
  private userName:string;
  private password:string;

  constructor(id:number, userName:string, password:string){
    this.id=id;
    this.userName=userName;
    this.password=password;
  }

  getId():number{
    return this.id;
  }

  getUsername():string{
    return this.userName;
  }

  setUsername(newUsername:string):void{
    this.userName=newUsername;
  }

}

module.exports = { User }
