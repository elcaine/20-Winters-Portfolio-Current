import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import imgMoreGlasses from "../assets/moreGlasses.jpg";

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setComment(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    setUserName('');
    setComment('');
    setEmail('');
    return ( window.open(`mailto:caine.winters@outlook.com?subject=Contact inquiry from React profile&body=${comment}%0D%0A%0D%0AThank you,%0D%0A${userName}`) );
  };

  const handleMouseLeave = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if(!inputValue) { alert(`${inputType} cannot be left blank!`); }
  };

  return (
    <>
    <div className="container text-center">
      <h1>Hello {userName}</h1>
      <form className="codeCard" id="contactForm" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          type="text"
          placeholder="Name"
          autoComplete="name"
          style={{ width: "69%", margin: "auto", display: "block",  }}
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          type="email"
          placeholder="email"
          autoComplete="email"
          style={{ width: "69%"}}
        />
        <div>
        <textarea
          value={comment}
          name="comment"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          type="text"
          placeholder="Enter comments here"
          autoComplete="off"
          rows={10} cols={39}
        ></textarea>
        </div>
        <div><button type="submit" className="button">Submit</button></div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

    
<div>
<img src={imgMoreGlasses} alt="Another painting of glasses"/>
</div>
</>
  );
}

export default Contact;
