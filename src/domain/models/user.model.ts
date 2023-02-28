export class User {

  id: number;
  username: string;
  password: string;

  constructor(id: number, userName: string, password: string) {
    this.id = id;
    this.username = userName;
    this.password = password;
  }

  getId(): number {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(newUsername: string): void {
    this.username = newUsername;
  }

  equals(user:User):boolean{
    if(user.username==this.username && user.password==this.password){
      return true;
    }
    else{
      return false;
    }
  }

}
