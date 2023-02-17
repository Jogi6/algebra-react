import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getItem } from "../services/data";

const ShopItem = () =>{
    const [item, setItem] = useState({});
    const params = useParams();

    useEffect(()=>{
        setItem(getItem(params.id)[0])
    }, [params.id]);

    return <>
        <div>
            <h1>{item.name}</h1>
            <h2>{item.desc}</h2>
            <img src={item.image} width={300}></img>
        </div>

        <Outlet />
    </>
}

export default ShopItem;