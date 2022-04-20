import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-3">
      {users.map((user) => (
        <ListGroupItem
          key={user.id}
          className="d-flex justify-content-between align-items-center mt-1"
        >
          <strong>{user.name}</strong>
          <div className="ml-auto ">
            <Link to={"/edit/" + user.id} className="btn btn-secondary mr-1">
              Edit
            </Link>
            <Button onClick={() => removeUser(user.id)} color="danger">
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
