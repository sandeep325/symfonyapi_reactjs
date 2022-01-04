import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <React.Fragment>
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <Link to="/">
                        <img src="images/icon/logo.png" alt="Cool Admin" />
                    </Link>
                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
                            <li className="active has-sub">
                                <Link className="js-arrow" to="">
                                    <i className="fas fa-tachometer-alt"></i>Dashboard </Link>

                            </li>
                            <li>
                                <Link to="/userlist">
                                    <i className="fas fa-chart-bar"></i>Users List</Link>
                            </li>
                            <li>
                                <Link to="/adduser">
                                    <i className="fas fa-table"></i>Add New User</Link>
                            </li>
                            <li>
                                <Link to="">
                                    <i className="far fa-check-square"></i>Forms</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
        </React.Fragment>
    );
}
export default Sidebar;