function User(props)
 {
    return(
    <div>
        {/* <h1>Name:rutuja</h1> */}
        <h1>Name{props.name}</h1>
        <h1>Age{props.age}</h1>
        {/* **Children is passed without variable** */}
        <p> {props.children} </p>
    </div>
    );
}
export default User;