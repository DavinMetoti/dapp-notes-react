import React from "react";

function Navbar({ onSearch }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/" className="center">
                    <img src="/logo.png" alt="logo" width="6%" />
                    <span className="text-logo">DAPP NOTES</span>
                </a>
            </div>
            <div class="search-container">
                <input onChange={(event) => onSearch(event)} type="text" name="search" placeholder="Search..." class="search-input" />
                <a href="#" class="search-btn">
                    <i class="fas fa-search"></i>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
