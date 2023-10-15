import { useNavigate } from "react-router-dom"


function GoFund() {

  const navigate = useNavigate();

  const navigateToDonate = () => {

    navigate ('/donate');
  };

  return (
<>

<div className="gofund">

<h2 className="donate">Charity does not make you poor</h2>

  <button className="donate2" onClick={navigateToDonate}><h3 >Donate</h3></button>

  </div>
</>  
)
}
export default GoFund