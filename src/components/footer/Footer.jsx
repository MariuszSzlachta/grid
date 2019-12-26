import PropTypes from "prop-types";
import React from "react";

const Footer = ({ children }) => (
    <div className="grid-footer">
        {children}
    </div>
);

export default Footer;

Footer.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
};
