import React from 'react';

const Nav = () => {
    const handleSignOut = () => {
        localStorage.removeItem("username")
        localStorage.removeItem("password");
        window.location.reload()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href={"https://github.com/Stanisds12"}>Stani DEV</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <span className="nav-link">{localStorage.getItem("username")}</span>
                        </li>
                        <li id="signOff" className="nav-item">
                            <span className="nav-link disabled"  tabIndex="-1" aria-disabled="true" onClick={handleSignOut}>Sign Out</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
