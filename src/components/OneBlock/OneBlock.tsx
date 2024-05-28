import React from 'react';

interface OneBlockProps {
    hasItem: boolean;
    clicked: boolean;
}

const OneBlock: React.FC<OneBlockProps> = () => {
    return (
        <div>
            <div className='withItem'
                 style={{width: "50px", height: "50px", backgroundColor: "black"}}></div>
        </div>
    );
};

export default OneBlock;