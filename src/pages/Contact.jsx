import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

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
    // alert(`Hello ${userName}\nemail: ${email}\nmsg: ${comment}`);

    setUserName('');
    setComment('');
    setEmail('');
    return ( window.open(`mailto:caine.winters@outlook.com?subject=Contact inquiry from React profile&body=${comment}%0D%0A%0D%0AThank you,%0D%0A${userName}`) );
  };

  return (
    <div className="container text-center">
      <h1>Hello {userName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <div>
        <textarea
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter comments here"
          rows={10} cols={40}
        ></textarea>
        </div>
        <div><button type="submit">Submit</button></div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
