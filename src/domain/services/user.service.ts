export class UserService {
  //repository:UserRepository;

  constructor() {}

  async findOne(userName: string) {
    // const user = await this.repository.findUserByUsername(userName);
    const user = "prueba";
    if (!user) {
      //
    }
    return user;
  }
}
