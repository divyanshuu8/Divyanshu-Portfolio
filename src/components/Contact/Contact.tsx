import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:singhdivyanshu975@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:singhdivyanshu975@gmail.com">singhdivyanshu975@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919879618851"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919879618851">(+91) 9879618851</a>
        </div>  
      </div>
    </Container>
  )
}