import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ListComponent = () => {
    const preferiti = useSelector((state) => state.queryState.preferiti);
    console.log(preferiti);

    return (
        <div>
            <ul>
                <li>{preferiti}</li>
            </ul>
        </div>
    );
};

export default ListComponent;
