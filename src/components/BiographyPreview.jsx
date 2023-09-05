import React, { useState } from "react";

function BiographyPreview({ fullName, occupation, email, website, phone }) {
  return (
    <div className="bioPreview">
      <div className="nameTitle">
        <h1>{fullName}</h1>
        <h2>{occupation}</h2>
      </div>
      <div className="contactInfo">
        <p>{email}</p>
        <p>{website}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}

export default BiographyPreview;
