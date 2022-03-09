import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:3000/books/" + id, { signal: signal })
      .then((resp) => resp.json())
      .then((data) => setBook(data))
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  //   console.log(book);
  return (
    <div className='book-details mt-5'>
      <div className='card w-75 m-auto'>
        <div className='card-body'>
          <h5 className='card-title'>{book.title}</h5>
          <p className='card-text'>{book.summary}</p>
        </div>
        <div className='card-footer text-muted'>
          Written by:{book.author}
          <small className='d-block'>{book.year} </small>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
