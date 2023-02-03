interface UserRepository{
    findByUserName(username:string):User;
}

export default UserRepository