import React from "react";

import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-lists/user-lists.componet";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="SunLi"
        email="flowerman866@gmail.com"
        dataSource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
