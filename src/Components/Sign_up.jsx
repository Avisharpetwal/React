import React from 'react'
import { useActionState } from 'react';


function SignupForm() {
  async function signup(previousState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name) {
      return { error: "Name is required" };
    }
    if (!email) {
      return { error: "Email is required" };
    }
    if (!email.includes("@")) {
      return { error: "Please enter a valid email" };
    }
    if (!password) {
      return { error: "Password is required" };
    }
    if (password.length < 6) {
      return { error: "Password must be at least 6 characters" };
    }
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: `Welcome, ${name}! Your account is created.` };
  }


    const [state, formAction, isPending] = useActionState(signup, {});
  return (
    <div>
        <form action={formAction}>
            <input type='text' name='name' placeholder='Enter Your Name'/>
            <br/>
            <br/>
            <input type='password'name='password' placeholder='Enter Your Password'/>
            <br/>
            <br/>
            <input type='email'   name="email"placeholder='Enter Your Email'/>
            <br/>
            <br/>
            <button disabled={isPending}>SUBMIT</button>
            {/* Show error or success messages */}
            {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
            {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
        </form>

      
    </div>
  )
}
export default SignupForm;
