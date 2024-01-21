import books from "../../assets/booksMockApi";
import { userStore } from "../../store/appStore";
import { useBookStore } from "../../store/bookStore";
import Navbar from "../Navbar";
import LibraryBook from "./LibraryBook";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";

const LibraryScreen = () => {
  const { activeBook } = useBookStore();
  const {user} = userStore()

  return (
    <>
    <div className="library__screen-container">
      <Sidebar />

{/* improve */}
      {activeBook ? books.map(book => {
        if(book.id === activeBook) {
          return <LibraryBook {...book}/>
        }
      }) : 
        <NothingSelected/>
        } 
    </div>
    </>
  );
};

export default LibraryScreen;
