import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HeaderTable } from "./Components/HeaderTable/HeaderTable.jsx";
import { UsersList } from "./Components/UserList/UsersList.jsx";
import { fetchUsers } from "./Redux/users/usersOperations.js";
import { MainSection } from './App.styled.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <MainSection>
      <HeaderTable />
      <UsersList />
    </MainSection>
  );
}

export default App;
