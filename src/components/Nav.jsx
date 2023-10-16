import React from "react";
import LetterAvatars from "./Avatar";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div id="nav-content" className="container-fluid">
                <a className="navbar-brand" href="/">Week</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <LetterAvatars />
                    </div>
                </div>
            </div>
        </nav>
    )
}