import React from "react";

const Vegetables = (props) => {
    const [count1, setCount1] = React.useState(props.tomatoes);
    const [count2, setCount2] = React.useState(props.potatoes);
    const [count3, setCount3] = React.useState(props.carrots);
    const [count4, setCount4] = React.useState(props.onions);

    function changeCount1(val){
        setCount1(count1 + val);
    }
    function changeCount2(val){
        setCount2(count2 + val);
    }
    function changeCount3(val){
        setCount3(count3 + val);
    }
    function changeCount4(val){
        setCount4(count4 + val);
    }

    return (
        <>
            <h1>Tomatoes:{count1}</h1>
            <button onClick={() => changeCount1(+1)}>+</button>
            <button onClick={() => changeCount1(-1)}>-</button>

            <h1>Potatoes:{count2}</h1>
            <button onClick={() => changeCount2(+1)}>+</button>
            <button onClick={() => changeCount2(-1)}>-</button>

            <h1>Carrots:{count3}</h1>
            <button onClick={() => changeCount3(+1)}>+</button>
            <button onClick={() => changeCount3(-1)}>-</button>

            <h1>Onions:{count4}</h1>
            <button onClick={() => changeCount4(+1)}>+</button>
            <button onClick={() => changeCount4(-1)}>-</button>
        </>
    );
};

export {Vegetables};
