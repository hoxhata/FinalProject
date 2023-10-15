import "../styles/Home.css"

import FotoHome from "../assets/author.jpg"
import FotoHome2 from "../assets/charity-money-jar.jpeg"
import Charity from "../assets/charity.jpeg"


function Home() {
    return(

        <> 
        <div className="home">
            {/* <h1>Charity does not make you poor</h1> */}
            <img className="foto1"  src={Charity} alt="" />
            <p>ATR Foundation organizes activities where donors, <br/>
             along with volunteers and the organization's staff, donate <br/>
             food, clothing, and essential supplies to needy families across the country. <br/>
             During this activity, ATR Foundation has assisted hunderets of families, <br/>
             children, and students.</p>
             <div className="home2">
             <img className="foto2" src={FotoHome} alt="" />
             <img className="foto2" src={FotoHome2} alt="" />
             </div>

        </div>
        
        </>
       
    )   
}

export default Home;