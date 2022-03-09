import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const AddBook = () => {
  return (
    <div className='w-75 m-auto'>
      <form id='book-form'>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' id='title' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Author</label>
          <input type='text' id='author' className='form-control' />
        </div>
        <div className='form-group'>
          <label>ISBN#</label>
          <input type='text' id='isbn' className='form-control' />
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
