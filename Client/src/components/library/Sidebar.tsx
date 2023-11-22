import { userStore } from "../../store/appStore";
import LibraryBookList from "./LibraryBookList";
import LibraryForm from "./LibraryForm";

const Sidebar = () => {
  const { user } = userStore();

  return (
    <aside className="library__sidebar" style={{padding: 10}}>
      <div className="library__sidebar-userinfo">
        <h3>{user.displayName}</h3>
      </div>
      <div>
       <LibraryForm/>
       <LibraryBookList/>
      </div>
    </aside>
  );
};

export default Sidebar;
