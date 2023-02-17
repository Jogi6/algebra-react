import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getItems } from "../services/data";

const Shop = () => {
    const[items, setItems] = useState([]);

    //hook da uhvatimo componentDidMount, DependencyList je prazan array "[]" kada želimo da se efekt okune samo na početku
    useEffect(() => {
        setItems(getItems());
    },[]);

    return (
        <>
            <h1>Shop page</h1>
            {
                items.map((item) => <Link key={item.id} to={"/shop/" + item.id}>
                    <h2>{item.name}</h2>
                </Link>)
            }

            <Outlet />
        </>
    )
}

export default Shop;