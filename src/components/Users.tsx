import { useSelector, useDispatch } from "react-redux";
import { usersThunk } from "../slices/usersSlice";
import { useEffect } from "react";

function Users() {
  let { users, isPending, isSuccess, isError, errorMessage } = useSelector(
    (state) => state.users
  );
  let dispatch = useDispatch();

  useEffect(() => {
    let action = usersThunk();
    dispatch(action);
  }, []);

  return (
    <div>
      {isError === true && <p className="text-danger fs-1">{errorMessage}</p>}
      <div>
        {users.map((userObj) => (
          <h3 key={userObj.id}>{userObj.name}</h3>
        ))}
      </div>
    </div>
  );
}

export default Users;
