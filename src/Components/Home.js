import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AllBooks from "./AllBooks";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [hasDelete, setHasDeleted] = useState(false);
  const url = "http://localhost:3000/books";

  const handleDelete = (id) => {
    fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Delete successfully");
      setHasDeleted(true);
    });
  };
  useEffect(
    (url) => {
      fetch("http://localhost:3000/books")
        .then((resp) => {
          // if (!resp.ok) {
          //   throw Error("could not fetch the data for that resource");
          // }
          return resp.json();
        })
        .then((data) => {
          setBooks(data);
          setIsPending(false);
          //   console.log(data);
        })
        .catch((err) => console.log(err));

      //   return {};
    },
    [url, hasDelete]
  );

  return (
    <div>
      {isPending && <div> Loading... </div>}
      <table className='table table-hover  mt-5 w-75 m-auto '>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <AllBooks books={books} onDelete={handleDelete} />
      </table>
    </div>
  );
};

export default Home;
