import React, { useState } from "react";
import axios from "axios";

function ApplyJob() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null); // To store the uploaded file

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);

    // Make a POST request to your API endpoint
    axios
      .post("your-api-endpoint", formData)
      .then((response) => {
        // Handle the success response here
        console.log("Application submitted successfully!", response.data);
        // You can redirect to the success page or show a success message here
      })
      .catch((error) => {
        // Handle the error response here
        console.error("Error submitting the application:", error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Apply for the Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ margin: "10px", padding: "10px" }}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px", padding: "10px" }}
        />
        <br />
        <textarea
          placeholder="Cover Letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          style={{ margin: "10px", padding: "10px", width: "100%" }}
        />
        <br />
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={(e) => setResume(e.target.files[0])}
          style={{ margin: "10px" }}
        />
        <br />
        <button
          type="submit"
          style={{
            background: "blue",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Apply
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;
