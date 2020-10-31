import React from 'react';
import SignUp from './SignUp';

const Home = () => {
    
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
            <main role="main" class="inner cover">
                <h2 className="lead">Get access to valuable resources and information to grow a career in education and collaborate with passionate educators just like you.</h2>
                <p className="lead">
                    <SignUp></SignUp>
                </p>
            </main>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;