import React, {MouseEventHandler} from 'react';

interface OneBlockProps {
    hasItem: boolean;
    clicked: boolean;
    divClick?: MouseEventHandler;
}

const OneBlock: React.FC<OneBlockProps> = ({hasItem, clicked, divClick}) => {
    return (
        <>
            <div>
                {hasItem && clicked ?
                    <div className="withItem" style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <strong style={{color: "black"}}>o</strong>
                    </div>
                    :
                    <></>
                    && clicked ?
                        <div className='withItem'
                             style={{width: "50px", height: "50px", backgroundColor: "white"}}></div>
                        :
                        <div className='withItem' onClick={divClick}
                             style={{width: "50px", height: "50px", backgroundColor: "black"}}></div>
                }
            </div>
        </>
    );
};

export default OneBlock;
