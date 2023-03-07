interface UserRepositoryInterface{
    findByUserName(username:string):User;
}

export default UserRepositoryInterface;