import React from "react";
import { useSelector } from "react-redux";

function SuccessPage() {
  const applicationData = useSelector((state) => state.applicationData);

  return (
    <div>
      <h2>Success!</h2>
      <p>Name: {applicationData.name}</p>
      <p>Email: {applicationData.email}</p>
      <p>Cover Letter: {applicationData.coverLetter}</p>
      <p>Resume: {applicationData.resume}</p>{" "}
      {/* Assuming you store the uploaded file URL */}
    </div>
  );
}

export default SuccessPage;
