const items = [
    {
        id: 125,
        name: "Mobiteli",
        desc: "Sve vrste mobitela",
        image: "https://aloalo.hr/upload/catalog/product/17462/thumb/1632489486_0903564_290x290r.webp"
    },
    {
        id: 126,
        name: "Računala",
        desc: "Sve vrste računala",
        image: "https://www.tportal.hr/media/thumbnail/w1000/541450.jpeg"
    },
    {
        id: 127,
        name: "Pametni satovi",
        desc: "Sve vrste pametnih satova",
        image: "https://static.shipgratis.eu/zoh4eiLi/IMG/86400/-jUZzgVIXJdFBsIO0DQ1u1PByaR--YgZM1rPlWJhfkM/fit/650/650/no/1/aHR0cHM6Ly9zdGF0aWNiYWNrZW5kLnNoaXBncmF0aXMuZXUvbWVkaWEvY2F0YWxvZy9wcm9kdWN0LzAvNy8wNzIyMGFiOGQ3MGQ4YjEyOThhYzE3NjljZmIwZDQwZjEyODUwNDQ4LmpwZWc"
    }
];

export const getItems = () => {
    return items;
}

export const getItem = (id) => {
    const itemId = parseInt(id);

    return items.filter(item => {
        return item.id === itemId;
    })
}