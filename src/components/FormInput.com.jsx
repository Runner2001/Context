import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { PostContext } from "../context/PostContext";

const FormInput = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    author: "",
    details: "",
  });
  const history = useNavigate();
  const { addPost } = useContext(PostContext);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    addPost(userInput.title, userInput.author, userInput.details);
    history("/");
  };
  return (
    <form onSubmit={handlSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          onChange={handelChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="details" className="form-label">
          Details
        </label>
        <textarea
          className="form-control"
          id="details"
          rows="3"
          name="details"
          onChange={handelChange}
        ></textarea>
      </div>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default FormInput;
