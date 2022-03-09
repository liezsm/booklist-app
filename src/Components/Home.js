const Home = () => {
  fetch("db.json")
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  return (
    <div>
      <table className='table table-striped  mt-5 w-75 m-auto'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN#</th>
          </tr>
        </thead>
        <tbody id='book-list'></tbody>
      </table>
    </div>
  );
};

export default Home;
