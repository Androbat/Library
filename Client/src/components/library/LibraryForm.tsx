const LibraryForm = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </div>
       <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" />
      </div>
      <div>
        <label htmlFor="pages">Pages</label>
        <input type="text" id="pages" />
      </div>
      <div>
        <label htmlFor="read">
            Read
          <input type="checkbox" name="read" id="read" />
        </label>
      </div>
      <div>
        <button>Agregar libro</button>
      </div>
    </form>
  );
};

export default LibraryForm;
