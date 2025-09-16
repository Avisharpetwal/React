// function User({user}){
//     return(
//         <div>
//             <hr/> 
//             <h1>Props In REACT </h1>
//             <h1>Name:{user.name}</h1>
//             <h1>Age:{user.age} </h1>
//         </div>
//     )
// }
// export default User
function User({names}){
    return(
        <div>
            <hr/> 
            <h1>Props In REACT </h1>
            <h1>College_Name:{names[0]}</h1>
            <h1>College_Name:{names[1]} </h1> 
        </div>
    )
}
export default User