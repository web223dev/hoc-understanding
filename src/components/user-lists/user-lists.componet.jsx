import React from "react";

import withData from "../../with-data";

const UserLists = ({ data }) => (
  <div className="container user-list">
    {data.map((user) => (
      <div className="post" key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
);

export default withData(UserLists);
