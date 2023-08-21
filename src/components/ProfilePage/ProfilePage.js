import { useContext, useEffect, useState } from "react";
import UserContext from "../../auth/UserContext";
import JoblyApi from "../../api";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    password: "",
  });
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    async function updateProfile() {
      try {
        const data = await JoblyApi.saveProfile(user.username, userInfo);
        console.log(data);
        setUser({ ...user, ...data });
      } catch (error) {}
    }
    updateProfile();
  };

  return (
    <div className="ProfilePage Login-Signup-Form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usernme </label>
          <input
            id="username"
            disabled
            type="text"
            name="username"
            onChange={handleChange}
            value={userInfo.username}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            onChange={handleChange}
            value={userInfo.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            onChange={handleChange}
            value={userInfo.lastName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
            value={userInfo.email}
          />
        </div>
        <div className="save-btn">
          <label></label>
          <input type="submit" value="Save Change" />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
