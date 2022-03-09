import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState("");

  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:3000/books/" + id, { signal: signal })
      .then((resp) => resp.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setSummary(data.summary);
        setYear(data.year);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, [id]);

  const editbook = (e) => {
    e.preventDefault();

    const newBook = { title, author, summary, year };
    // console.log(newBook);

    fetch("http://localhost:3000/books/" + id, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        author: author,
        summary: summary,
        year: year,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      console.log("Updated Successfully");
      history.push("/");
    });
    // fetch("http://localhost:3000/books", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(newBook),
    // }).then(() => {
    //   console.log("successfully added");
    // });
  };

  return (
    <div className='w-75 m-auto'>
      <form id='book-form' onSubmit={editbook}>
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
          value='Update Book'
          className='btn btn-primary submitBtn mt-3'
        />
      </form>
    </div>
  );
};

export default EditBook;
