const LibraryForm = () => {
  return (
    <form action="" className="book_form">
      <div className="book_form--input">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </div>
       <div className="book_form--input">
        <label htmlFor="author">Author</label>
        <input type="text" id="author" />
      </div>
      <div className="book_form--input">
        <label htmlFor="pages">Pages</label>
        <input type="text" id="pages" />
      </div>
      <div>
        <label htmlFor="read" title="Read or not">
            Read?
          <input type="checkbox" className="checkbox" name="read" id="read" />
        </label>
      </div>
      <div>
        <button className="book_form-btn">Agregar libro</button>
      </div>
    </form>
  );
};

export default LibraryForm;
