import "../styles/LoginForm.css"
import useFetch from "../hooks/useFetch"

function LoginForm() {
  


  return (

    <>


    <div className="loginform">
    <form className="form">
          <fieldset className="form1">
            <label>Name Surname</label>
          <input className="search" type="text" placeholder="name surname" />
          </fieldset>
          <fieldset className="form1">
            <label>e-mail</label>
          <input className="search" type="email" placeholder="email" />
          </fieldset>
          <fieldset className="form1">
            <label>Credit Card number</label>
          <input  className="search" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="16" placeholder="credit card number"  />
          </fieldset>
          <fieldset className="form1">
            <label>Credit Card CVV</label>
          <input className="search" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="3" placeholder="cvv"  /></fieldset>
          <fieldset className="form1">
          <label>Expr Date</label>
          <input className="search" type="month" id="#"   />
          </fieldset>
          <button className="loginbtn">Submit</button>
          </form>
    </div>
          
    </>
    
  )
}
export default LoginForm


