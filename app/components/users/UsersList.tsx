import React from "react";
import UserRow from "./UserRow";

const UsersList: React.FC = () => {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <UserRow/>
      </tbody>
    </table>
  );
};

export default UsersList;
