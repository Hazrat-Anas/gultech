import React from 'react'
import { useAuth0, isLoading } from '@auth0/auth0-react';
import ReactPlayer from 'react-player'
import UserProfile from './UserProfile';
function Home() {
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();


    if (isLoading) return <div>Loading...</div>
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className=" ms-auto d-flex justify-content-end col-md-4">
                    {
                        isAuthenticated && (
                           
                                  <button  type="button" class="btn btn-danger my-3 " onClick={() => logout()}>
                                Log out
                            </button>
                          
                          
                        )
                    }
                    <br />
                    {
                        !isAuthenticated && (
                            <button type="button" class="btn btn-primary my-3 w-50" onClick={() => loginWithRedirect()}>
                                Sign in
                            </button>
                        )
                    }
                </div>
            </div>
            <div className="row py-3 text-center">
                <h1 className='display-1'>
                    Welcome to GulTech
                </h1>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className=" offset-md-4 col-4">

                        {
                            !isAuthenticated &&
                            <p className='lead'>
                                please login to continue
                            </p>
                        }



                    </div>

                </div>
            </div>

            <UserProfile />
            <div className="container">
                <div className="row d-flex justify-content-center">
                   
                        {
                            !isAuthenticated && <ReactPlayer  playing={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        }
                   
                </div>
            </div>
        </div>
    )
}

export default Home