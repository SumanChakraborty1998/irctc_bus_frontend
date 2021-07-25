import React from 'react'

export const Signup = () => {
    return (
        <div>
              <form action="">
                  <label>
                      FirstName:
                      <input  placeholder="first_name"/>
                  </label><br/>
                  <label>
                      lastName:
                      <input placeholder="last_name" />
                  </label>
                  <label>
                      email:
                      <input placeholder ="email" />
                   </label>
                   <label>
                       password:
                       <input placeholder="passsword"/>
                   </label>
              </form>
        </div>
    )
}
