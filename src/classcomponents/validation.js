import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class YourComponent extends React.Component {
  // ... Your existing code

  handleSubmit = () => {
    const { email, first_name, last_name, phone, password } = this.state.guestinfo;

    // Validate each field
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isFirstNameValid = /^[A-Za-z]{1,60}$/.test(first_name);
    const isLastNameValid = /^[A-Za-z]{1,60}$/.test(last_name);
    const isPhoneValid = /^\d{8,15}$/.test(phone);
    const isPassword = /^(?!.*\s)(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    // Check if any field is invalid
    if (
      !isEmailValid ||
      !isFirstNameValid ||
      !isLastNameValid ||
      !isPhoneValid ||
      !isPassword
    ) {
      // Display specific error messages for each invalid field
      if (!isEmailValid) {
        toast.error("Invalid email format.");
      }
      if (!isFirstNameValid) {
        toast.error(
          "Invalid first name format. Please enter letters only."
        );
      }
      if (!isLastNameValid) {
        toast.error(
          "Invalid last name format. Please enter letters only."
        );
      }
      if (!isPhoneValid) {
        toast.error("Invalid phone number format. Please enter 10 digits.");
      }
      if (!isPassword) {
        toast.error("Invalid password format. Password must be at least 8 characters long, contain at least one letter, one digit, and no spaces.")
      }
    } else {
      // Your form submission logic goes here
      // ...
    }
  };

  render() {
    return (
      <div>
        {/* Your existing form fields */}
        <div className="form-group">
          {/* Email field */}
          <label>Email:</label>
          <input
          // ... (similar onBlur and onChange logic as in the previous examples)
          />
        </div>

        {/* Repeat similar code for other fields: first_name, last_name, phone */}

        {/* Submit button */}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default YourComponent;
