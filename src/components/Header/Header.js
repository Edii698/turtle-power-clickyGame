import React from "react";
import "./Header.css";

const Header = props => <div className="jumbotron jumbotron-fluid appHeader">
                            <h1 className="text-center title">Clicky Game!!</h1>
                            <h4 className="text-center sub">Click on an image to earn points, but don't click on an image more than once.</h4>
                        </div>;

export default Header;