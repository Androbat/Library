import books from "../../assets/booksMockApi";
import { useBookStore } from "../../store/bookStore";
const LibraryBookList = () => {
  const { setActiveBook } = useBookStore();

  const handleActiveBook = (id: string | undefined) => {
    setActiveBook(id);
  };
  return (
    <div className="library__book-list--container">
      {books.map((book) => {
        return (
          <div className="library__book-list--body" key={book.id}>
            <div
              className="library__book-info pointer"
              onClick={() => handleActiveBook(book.id)}
            >
              <p
                className="library__book-info--title"
                style={{ margin: 0, fontWeight: "bold" }}
              >
                {book.title}
              </p>
              <small className="library__book-info--author">
                Por {book.author}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LibraryBookList;
