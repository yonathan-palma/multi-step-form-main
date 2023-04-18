


export default function Footer(){
    return(
        <footer className="footer_info">
                <button type='button' className="btn_goBack" onClick={()=> setSection('accessories')}>Go Back</button>
                <button type='button' onClick={handleSubmit} className="btn_next">Confirm</button>
        </footer>
    )
}