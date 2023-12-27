import { userStore } from "../../store/appStore";
import Navbar from "../Navbar";
import LibraryBookList from "./LibraryBookList";
import LibraryForm from "./LibraryForm";

const Sidebar = () => {
  const { user } = userStore();

  return (
    <aside className="library__sidebar">
    <Navbar isAuthenticated={!!user}/>

      <div className="library__sidebar-userinfo">
        <h3>{user.displayName}</h3>
      </div>
      <div className="library__sidebar_utilities">
       <LibraryForm/>
       <LibraryBookList/>
      </div>
    </aside>
  );
};

export default Sidebar;
