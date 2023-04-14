

export default function PriceTime({price, time}){
    return(
        <span className="price_plan">{`$${price}/${time}`}</span>
    )
}