import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const AddBook = () => {
  // console.log(props);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState("");

  const history = useHistory();

  const addbook = (e) => {
    e.preventDefault();

    const newBook = { title, author, summary, year };
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBook),
    }).then(() => {
      console.log("successfully added");
      history.push("/");
    });
  };

  return (
    <div className='w-75 m-auto'>
      <form id='book-form' onSubmit={addbook}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            id='title'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Author</label>
          <input
            type='text'
            id='author'
            className='form-control'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Year Published:</label>
          <input
            type='number'
            id='isbn'
            className='form-control'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className='form-group mt-3'>
          <label>Summary</label>
          <textarea
            className='form-control'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Add Book'
          className='btn btn-primary submitBtn mt-3'
        />
      </form>
    </div>
  );
};

export default AddBook;
