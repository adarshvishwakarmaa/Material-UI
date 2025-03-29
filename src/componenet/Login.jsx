
// import React, { useState } from 'react'

// const Login = () => {
//     const [firstname, setfirstname] = useState("");
//     const [middlename, setmiddlename] = useState("");
//     const [lastname, setlastname] = useState("");
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");

//     const loginHandler = (e) =>{
//         e.preventDefault();

//         const mydata = {
//              firstname,
//              middlename,
//              lastname,
//              password,
//              email
//         }
//         console.log(mydata);
        
//     }
//     return (
//         <div>
//             <h1>Login Form</h1>
//             <form onSubmit={loginHandler}>
//                 <label htmlFor="firstname">firstName</label>
//                 <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} placeholder='Enter Your Name' />  <br /> <br />

//                 <label htmlFor="middlename">MiddleName</label>
//                 <input type="text" value={middlename} onChange={(e) => setmiddlename(e.target.value)} placeholder='Enter Your MiddleName' /> <br /> <br />


//                 <label htmlFor="lastname">LastName</label>
//                 <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} placeholder='Enter Your LastName' />  <br /> <br />


//                 <label htmlFor="email">Email</label>
//                 <input type="email" value={email} onChange={(e) => setemail(e.target.value)}  placeholder='Enter Your Email' />  <br /> <br />



//                 <label htmlFor="email">Password</label>
//                 <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter Your Password' />  <br /> <br />


//                 <button>Submit</button>

//             </form>
//         </div>
//     )
// }

// export default Login
