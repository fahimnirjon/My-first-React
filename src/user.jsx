export default function User ({user}){
    const {id, username, email, name} = user;
    return(
        <div>
            <h3>Title:{name} </h3>
            <p>UserID:{username} </p>
            <p>PostID:{id} </p>
            <p>Email:{email} </p>
        </div>
    )
}