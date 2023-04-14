import iconThanks from "../../images/icon-thank-you.svg";
import "./Thank.css"


export function SectionThank({setSection, setValues}){
    const home = ()=>{
        setValues({
            name: "",
            email: "",
            phone: "",
            radio_plan: "arcade",
            plan_type:"monthly",
            cost_plan : 9,
            accessories: [],
        });
        setSection('info');
    }
    return(
        <div className="section_form thanks">
            <img src={iconThanks} className="thanks_img" alt="Thank You" />
            <h1 className="thank-you-header font">Thank you!</h1>
            <p className="thank_you_description font">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at haywayaheadshotstrategy.
                fx@gmail.com.
            </p>
            <a className="change_link" onClick={home}>Home</a>
        </div>
    )
}