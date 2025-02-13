import React, { useState } from 'react';

const CollapsibleComponent = ({ Component }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleCollapse}>
                {isOpen ? 'Collapse' : 'Expand'}
            </button>
            {isOpen && <Component />}
        </div>
    );
};

export default CollapsibleComponent;
