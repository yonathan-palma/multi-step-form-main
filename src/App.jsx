//hook
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

//components
import FormAside from './assets/components/formAside';
import SectionInfo from './assets/components/SectionInfo';
import SectionPlan from './assets/components/SectionPlan';
import SectionAccessories from './assets/components/accessories';
import SEctionFinishing from './assets/components/SectionFinishing.jsx';
import { SectionThank } from './assets/components/sectionThank';

//css
import './App.css'

function App() {

  // const {register, handleSubmit} = useForm();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    radio_plan: "arcade",
    plan_type:"monthly",
    cost_plan : 9,
    accessories: [],
  });
  const [section, setSection] = useState('info')

  const handleSubmit =(e)=>{
    // e.target.submit();
    // setSection();
  }

  return (
    <div className="App form_card">
      <FormAside section={section} />
      <div className="form_content">
        <form onSubmit={handleSubmit} >
          { section == 'info' && <SectionInfo setValues={setValues} values={values} setSection={setSection} />}
          { section == 'plan' && <SectionPlan setValues={setValues} values={values} setSection={setSection} />}
          { section == 'accessories' && <SectionAccessories setValues={setValues} values={values} setSection={setSection} />}
          { section == 'finishing' && <SEctionFinishing setValues={setValues} values={values} setSection={setSection} />}
          { section == 'thank' && <SectionThank setValues={setValues} setSection={setSection} />}
        </form>
      </div>
    </div>
  )
}

export default App
