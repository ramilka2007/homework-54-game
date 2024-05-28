import {useState} from 'react';
import {Block} from "../../types";
import OneBlock from "../OneBlock/OneBlock";

const Desk = () => {
    const createItems = () => {
        let start:Block[]= [];
        for (let i = 0; i < 36; i++) {
            let parameter = {hasItem: false, clicked: false, id: `${i}`};
            start.push(parameter);
        }
        const randomIndex = Math.floor(Math.random() * start.length);
        start[randomIndex] = {hasItem: true, clicked: false, id: `${randomIndex}`};
        return start;
    }

    const [items, setItems] = useState(createItems);

    const reset = () => {
        createItems();
        setItems(createItems);
    }

    const clickedItems = (id: string) => {
        setItems((prevState) => {
            return prevState.map((item) => {
                if (item.id === id) {
                    return {...item, clicked: true};
                }

                return item;
            });
        });
    };

    return (
        <>
            <div style={{
                display: "flex",
                padding: "10px",
                gap: "3px",
                border: "1px solid black",
                width: "318px",
                flexWrap: "wrap"
            }}>
                {items.map((item) => (
                    <OneBlock key={item.id} hasItem={item.hasItem} clicked={item.clicked}
                              divClick={() => clickedItems(item.id)}/>
                ))}</div>
            <div>
                <strong>Попытка: </strong>
            </div>
            <button onClick={reset}>Сброс</button>
        </>
    );
};

export default Desk;