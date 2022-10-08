import CardsData from "api/cards.json"
import { useEffect, useState } from "react";
function Card() {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        setCards(CardsData)
    },[])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4 ">
             {cards.length && cards.map(card=>(
                <div className="bg-white-10 rounded-lg p-14 shadow-lg flex flex-col items-center text-center">
                    <img className="mb-6" src={card.image}/>
                    <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                    <p className="mt-2 text-sm text-gray-700">{card.description}</p>
                </div>
             ))}
        </div>
    );
}

export default Card;