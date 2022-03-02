import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className='container user-profile'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='rounded-circle d-inline-block ' src={user.picture} alt="" />
                        <div className="d-inline-block">
                            <span className='align-top ms-3 name'>
                                {user.name}
                            </span>
                            <br />
                            <span className='align-top ms-3 email'>
                                {user.email}
                            </span>

                           
                        </div>


                    </div>
                    <p className='py-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, eius libero. Vitae repellendus illo totam rerum, impedit nobis harum omnis distinctio earum nisi corrupti officiis enim, deleniti eligendi sit inventore doloribus tempora sapiente error odio cumque qui magni! Quidem dicta perferendis assumenda porro deserunt pariatur at consequuntur sunt ipsum. At.
                    </p>
                </div>
                {/* <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <JSONPretty data={user} /> */}
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}

export default UserProfile