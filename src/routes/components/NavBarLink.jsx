import React from 'react'
import { Link } from "react-router-dom";
export default function NavBarLink({ sx = {color:"#000"}, to, children }) {
    return (
            <Link to={to} style={{ textDecoration: 'none', ...sx }}>
                {children}
            </Link>
    );
}
