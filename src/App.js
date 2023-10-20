import React, {useState} from 'react';
import './App.css';

function App() {
  const[form, setForm] = React.useState(
    {
      firstName: "",
lastName:"",
email: "",
phoneNumber: "",
birthPlace: "",
favFood: "",
about: ""
})
// Initialize an array to store submitted badges
const [badgeList, setBadgeList] = useState([]);
// handleChange function is an event handler to update form state when inputs change
function handleChange(event){
  // Extract the name and value from the input element
  const {name, value} = event.target;
  // Update the form state with the new value for the specified field
   
  setForm((prevForm) => ({
...prevForm, [name] : value
,  }));
}


// handleFormSubmit function is called when the form is submitted
function handleFormSubmit(event) {
  event.preventDefault();
// Validate input fields: first name and last name should have at least 3 characters,
    // and the phone number should have exactly 10 characters (numeric)
  if (
    form.firstName.length < 3 ||
    form.lastName.length < 3 ||
    form.phoneNumber.length !== 10
  ) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Add the current form data (badge) to the badgeList array

  setBadgeList((prevBadgeList) => [...prevBadgeList, form]);

  // Clear the form by resetting its fields to initial values
  setForm({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthPlace: "",
    favFood: "",
    about: ""
  });
}
// Render the JSX for the component
return (
  <div>
    <form onSubmit={handleFormSubmit}>
      {/* Input fields with placeholders, names, and event handlers */}
      <input
        type="text"
        placeholder="First Name"
        className="f-name"
        name="firstName"
        onChange={handleChange}
        value={form.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="l-name"
        name="lastName"
        onChange={handleChange}
        value={form.lastName}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="phone-num"
        name="phoneNumber"
        onChange={handleChange}
        value={form.phoneNumber}
      />
      <input
        type="text"
        placeholder="Email"
        className="e-mail"
        name="email"
        onChange={handleChange}
        value={form.email}
      />


<input
        type="text"
        placeholder="Birth Place"
        className="birthPlace"
        name="birthPlace"
        onChange={handleChange}
        value={form.birthPlace}
      />
      <input
        type="text"
        placeholder="Tell us about yourself"
        className="about"
        name="about"
        onChange={handleChange}
        value={form.about}
      />
      <input
        type="text"
        placeholder="Favorite food"
        className="fav-food"
        name="favFood"
        onChange={handleChange}
        value={form.favFood}
      />

        {/* (Similar input fields for Last Name, Phone Number, Email, About, and Favorite Food) */}
      <button className="Submit">Submit</button>
    </form>
{/* Button to submit the entire form (not used in the code) */}
    {/* <button className="Submit">Submit</button> */}

    <ol>
      {/* Map over badgeList and display each badge as a list item */}
      {badgeList.map((badge, index) => (
        <li key={index}>
          {/* Display badge information including First Name, Last Name, Email, etc. */}
          <p>First Name: {badge.firstName}</p>
          <p>Last Name: {badge.lastName}</p>
          <p>Email: {badge.email}</p>
          <p>Phone Number: {badge.phoneNumber}</p>
          <p>Birthplace: {badge.birthPlace}</p>
          <p>Favorite Food: {badge.favFood}</p>
          <p>About: {badge.about}</p>
        </li>
      ))}
    </ol>
  </div>
);
}
 
// This code creates a React component for a badge submission form, and it explains how the component's state and event handlers work. Users can enter badge information, submit it, and view the submitted badges in a list below the form. The code also includes basic validation to ensure that certain fields meet specific criteria.






 export default App;

// - The user should be able to input in the badge fields.
// - Upon submit, the badge fields should be cleared, and a new badge should be displayed below the badge form.
// - Each time the user submits a badge, each badge will be printed below the form in a list.
// - Specify input types to correspond with the required information.
// - Add a minimal character count of 3 for each field.
// - Note: The new badge should not appear until after it is submitted.
// - If any of the input fields are empty the Submit button should be disabled
// - Write validation code to make sure the phone number field only has numbers (no dashes or special characters, must look like this `9757653323`