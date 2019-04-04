import React from 'react';
import './styles.sass';

const Template = (props) => (
    <main>
        <div className="container">
            {props.children}
        </div>
    </main>
);

export default Template;
