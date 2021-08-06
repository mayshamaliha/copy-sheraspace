import React from 'react';
import './myStyle.css';
import emailjs from "emailjs-com";

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_s7mxk6d', e.target, 'user_dWpLqn08SuOntEdfh6ea6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

class CareerDetails extends React.Component{
    render() {
        return (
            <div>
                <h1>Apply for position</h1>
                <form className ="form" onSubmit= {sendEmail}>
                <label for = "name">Name</label>
                <input type ="text" name="name" id="name" placeholder="Type your full name"></input> <br/>

                <label for = "email">Email</label>
                <input type ="email" name="email" id="email" placeholder="Type a valid email"></input> <br/>

                <label for = "Phone">Phone</label>
                <input type ="tel" name="Phone" id="Phone" placeholder="Type a valid phone number e.g: 0134432425525"></input> <br/>

                <label for = "Linkedin">Linkedin</label>
                <input type ="url" name="Linkedin" id="Linkedin" placeholder="Paste your Linkedin Profile"></input> <br/>

                <label>Select your skills (You have to select at least one skill)</label><br/><br/>

                <input type="checkbox" name="skills" id="CSS"></input>
                <label for ="CSS">CSS</label><br/><br/>

                <input type="checkbox" name="skills" id="HTML"></input>
                <label for ="HTML">HTML</label><br/><br/>

                <input type="checkbox" name="skills" id="JavaScript"></input>
                <label for ="JavaScript">JavaScript</label><br/><br/>

                <input type="checkbox" name="skills" id="PHP"></input>
                <label for ="PHP">PHP</label><br/><br/>

                <input type="checkbox" name="skills" id="Python"></input>
                <label for ="Python">Python</label><br/><br/>

                <input type="checkbox" name="skills" id="SQL"></input>
                <label for ="SQL">SQL</label><br/><br/>

                <label for="file-select">CV(pdf format)</label><br/>
                <input type="file" name="Upload" id="file-select"></input><br/>

                <div className="center">
                <input id="submit-button" type="submit" value="Submit application"></input>
            </div>
                </form>
            </div>
        )
    }
}
export default CareerDetails;