import PriceTime from "../priceTime";

//css
import "./Finishing.css";


export default function SEctionFinishing({values, setSection, setValues}){

    const {radio_plan, plan_type, accessories, cost_plan} = values;

    const plan_cost = {
        arcade:{monthly: 9,yearly: 90},
        advance:{monthly: 12,yearly: 120},
        pro:{monthly: 15,yearly: 150}
    }

    const totalAccessories = accessories.reduce((acu, elem) =>{
        return acu + elem.price
    }, 0);

    const plan = plan_cost[values.radio_plan];

    const handleSubmit =()=>{
        let total = totalAccessories + cost_plan;
        const newValues={
            ...values,
            total:total
        }        
        setValues(newValues);
        setSection("thank");
    }

    return(
        <div className="section_form finishing">
            <header>
            <h1>Finishing Up</h1>
            <p>
                Double-check everything looks OK before confirming.
            </p>
            </header>
            <main>
                <div className="order_container">
                    <div className="order order_border_button">
                        <div className="radio_plan">
                            <p className="radio_plan_title">
                                {`${radio_plan[0].toUpperCase() + radio_plan.substring(1)} `}
                                ({`${plan_type[0].toUpperCase() + plan_type.substring(1)}`})
                            </p>
                            <a className="change_link" onClick={()=> setSection('plan')}>Change</a>
                            
                        </div>
                        <p className="price_order radio_plan_title">
                            <PriceTime 
                                price={plan[values.plan_type ] } 
                                time={plan_type == "monthly" ? 'mo' : 'yr'}
                            />
                        </p>
                    </div>
                    {
                        accessories.map(elem => {
                            return(
                                <div className="acceesories_container" key={elem.name}>
                                    <div className="order" key={elem.name}>
                                        <div className="accesorieTitle">
                                            <p>{elem.name}</p> 
                                        </div>
                                        <div className="accesoriePrice">
                                            + 
                                            <PriceTime 
                                                price={elem.price} 
                                                time={plan_type == "monthly" ? 'mo' : 'yr'}
                                            />                                   
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                    
                </div>
                <div className="total">
                    <p>Total (per {plan_type == 'monthly' ? 'month' : 'year'}) </p>
                    <p className="total_cost">
                        {plan_type == "monthly" ? '+' : ''}
                        <PriceTime 
                            price={(totalAccessories + cost_plan)} 
                            time={plan_type == "monthly" ? 'mo' : 'yr'}
                        />
                    </p>
                </div>
            </main>
            <footer className="footer_info">
                <button type='button' className="btn_goBack" onClick={()=> setSection('accessories')}>Go Back</button>
                <button type='button' onClick={handleSubmit} className="btn_next">Confirm</button>
            </footer>
        </div>
    )
}