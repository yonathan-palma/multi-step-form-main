import PriceTime from "../priceTime";
import "./accessories.css";

export default function SectionAccessories({setValues, values, setSection}){

    const accessoriesList = [
        {
            id:"service",
            title:"Online service",
            description:"Access to multiplayer games",
            price:{monthly: 1,yearly: 10},
        },
        {
            id:"storage",
            title:"Larger storage",
            description:"Extra 1TB of cloud save",
            price:{monthly: 2,yearly: 20},
        },
        {
            id:"profile",
            title:"Customizable Profile",
            description:"Custom theme on your profile",
            price:{monthly: 2,yearly: 20},
        }
    ]

    const handleChange=(e, price)=>{
        const {id, checked ,dataset} = e.target;
        let accessories = values.accessories;
        const priceAccesorie =  price[values.plan_type];

        if (!checked) {
            accessories = values.accessories.filter(ele => ele.name != dataset.title);
            // accessories.splice(accessories.findIndex(id) ,1)
        }else{
            accessories.push({name:dataset.title, price: priceAccesorie});
        }

        const newValues={
          ...values,
          accessories:accessories
        }
        // newValues.accessories = accessories;
        console.log(newValues)
        setValues(newValues)
    }
    return(
        <div className="section_form accessories">
            <header>
            <h1>Pick add-ons</h1>
            <p>
                Add-ons help enhance your gaming experience.
            </p>
            </header>
            <main>
                {
                    accessoriesList.map(element => {
                        let checked = values.accessories.some(elem => elem.name == element.title);
                        // console.log(checked)
                        return(
                            <label htmlFor={element.id} className="label_accessories" key={element.id}>
                                <input 
                                    type="checkbox" 
                                    name={element.id}
                                    id={element.id}  
                                    data-title={element.title}
                                    checked={checked}
                                    onChange={(e) => handleChange(e,element.price)}
                                />
                                <div className="title_label">
                                    <h2 className="add-ons-package-h2">{element.title}</h2>
                                    <h3 className="add-ons-package-h4">{element.description}</h3>
                                </div>
                                <p className="price_accesories">+
                                    <PriceTime
                                        price={element.price[values.plan_type]} 
                                        time={values.plan_type == "monthly" ? 'mo' : 'yr'}
                                    />
                                </p>
                            </label>
                        )
                    })
                }
            </main>
            <footer className="footer_info">
                <button type='butoon' className="btn_goBack" onClick={()=> setSection('plan')}>Go Back</button>
                <button type='butoon' className="btn_next" onClick={()=> setSection('finishing')}>Next Step</button>
            </footer>
        </div>
    )
}