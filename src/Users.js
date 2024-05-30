import React, { useEffect, useState } from 'react';
import './App.css';

const Users = () => {
  const Users_API_URL = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users';
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(Users_API_URL);
        const listedUsers = await res.json();
        setUsers(listedUsers);
        setFilteredUsers(listedUsers);
      } catch (err) {
        console.log(err.stack)
      }
    }
    (async () => await fetchUsers())()
  }, []);


  const searchUsers = () => {
    if (searchInput.length < 2) {
      alert('Enter Atleast Two Charactors')
    } else {
      const userFilter = users.filter(user =>
        user.fullName.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(userFilter)
      setFilteredUsers(userFilter)
    }
  };

  const reset = () => {
    setSearchInput('')
    setFilteredUsers(users);
  }



  return (
    <div>
      <section className="users-page">
        <div className="users-head">Users</div>
        <div className="search-area">
          <form onSubmit={(e) => {
            e.preventDefault()
            searchUsers()
          }} >
            <input type="text"
              id="userSearch"
              placeholder="Search by Name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
          <button onClick={reset} id="userReset">Reset</button>
        </div>
        <table className="users-table">
          <tr className="users-table-head">
            <th>ID</th>
            <th>User Avatar</th>
            <th>Full Name</th>
            <th>DoB</th>
            <th>Gender</th>
            <th>Current Location</th>
          </tr>
          <tbody className="table-data-containor" id="userTableData">
            {filteredUsers.map(values => (
              <tr className="user-table-data" key={values.id}>
                <td id="userID" className="secondary-data">{values.id}</td>
                <td id="UserAvatar"><img src={values.profilePic} alt="profile" /></td>
                <td id="FullName" className="primary-data">{values.fullName}</td>
                <td id="DoB" className="secondary-data">{values.dob}</td>
                <td id="Gender" className="secondary-data">{values.gender}</td>
                <td id="CurrentLocation" className="secondary-data">{values.currentCity}, <br /> {values.currentCountry}</td>
              </tr >
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Users