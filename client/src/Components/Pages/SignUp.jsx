import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "react-toastify/ReactToastify.css";
import { ToastContainer,  toast } from "react-toastify";
import axios from 'axios';


const SignUp = () => {
    const [surName, setSurName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate(); // Hook for navigation

    const submit = (e) => {
        e.preventDefault()
        if (surName=="" || firstName=="" || lastName=="" || email=="" || password=="") {
            toast.warn('😔 Enter the necessary information!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
                });
        }else{
            
            let dataOne = {surName, firstName, lastName, userName, email, password}
            setUserName('');
            setPassword('');
            setSurName('');
            setFirstName('')
            setLastName('')
            setEmail('')
        console.log(dataOne);

        axios.post("http://localhost:3000/signup", dataOne)
        .then((res)=>{
            if(res.data){
                console.log(res.data);
                
                setMsg(res.data.message)
                toast.success(msg, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
                });
                setTimeout(() => {
                    navigate('/signin')
                }, 3000);
            }
            
        })
        .catch((err)=>{console.error(err)})
        
        
        // const users = JSON.parse(localStorage.getItem('users')) || [];
        // const userExists = users.find((user) => user.userName === userName || user.email === email);

    // if (userExists) {
     
      
    //   return;
    // }



    // Add the new user to local storage
    // users.push({ userName, password });
    // localStorage.setItem('users', JSON.stringify(users));

    // Clear form fields and error message
  
    // toast.success('👍SignUp successful, you can now proceed to sign in!', {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     // transition: Bounce,
    //     });

        }
        
  };

  return (
    <div>
        <section class="container">
            <div class="row">
                <div class="col d-none d-lg-block d-sm-none d-md-none"></div>
                <div class="col py-5">
                    <h3 class="text-center py-2">Create Account</h3>
                    <div>
                        <form class="mb-3">
                            <label for="Surname" class="form-label">Surname</label>
                            <input type="text" class="form-control py-3" name='surName'onChange={(e)=>setSurName(e.target.value)} value={surName} required></input>

                            <label for="FirstName" class="form-label">First Name</label>
                            <input type="text" class="form-control py-3" name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName} required></input>

                            <label for="LastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control py-3" name='lastName' onChange={(e)=>setLastName(e.target.value)} value={lastName} required></input>

                            <label for="username" class="form-label">Choose a Username</label>
                            <input type="text" class="form-control py-3" name='userName' onChange={(e)=>setUserName(e.target.value)} value={userName} required></input>

                            <label for="username" class="form-label">Enter your Email Address</label>
                            <input type="email" class="form-control py-3" name='email' onChange={(e)=>setEmail(e.target.value)} value={email} required></input>

                            <label for="password" class="form-label">Choose a password</label>
                            <input type="password" class="form-control py-3" name='password' onChange={(e)=>setPassword(e.target.value)} value={password} required></input>
                        </form>
                        <div class="py-2 text-center"></div>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label pb-3" for="defaultCheck1">
                            I agree to <a href="#" class="a-2">Term of use</a>
                            </label>
                        </div>
                        <div>
                            <button type="button" class="btn btn-1 rounded-pill btn-primary w-100 fw-bold py-2" onClick={submit}>Create account</button>
                        </div>
                        <div class="text-center text-dark anchor py-5">
                            <p>Already have an account? <Link to='/signin' class="text-dark a-1">Sign in</Link></p>
                        </div>
                </div>
                <div class="col d-none d-lg-block d-sm-none d-md-none"></div>
            </div>
        </section>
        <ToastContainer/>
    </div>
  )
}

export default SignUp