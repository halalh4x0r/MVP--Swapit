import React from "react";

function CreateListing() {
  return (
    <div>
      <h2>Create a New Listing</h2>
      <form>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Price" />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
}

export default CreateListing;
