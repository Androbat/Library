import books from "../../assets/booksMockApi";
import LibraryBook from "./LibraryBook";


const LibraryBooks = () => {
  return (
    <>
    {books?.map(book => (
        <LibraryBook key={book.id} {...book}/>
    ) )}
    </>
  );
};

export default LibraryBooks;
