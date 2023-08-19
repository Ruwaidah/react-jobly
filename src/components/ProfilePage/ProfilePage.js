import { useContext, useEffect, useState } from "react";
import UserContext from "../../auth/UserContext";
import JoblyApi from "../../api";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    password: "",
  });
console.log(user)
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
        setUser({...user, ...data});
      } catch (error) {}
    }
    updateProfile();
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          disabled
          type="text"
          name="username"
          onChange={handleChange}
          value={userInfo.username}
        />
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={userInfo.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={userInfo.lastName}
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={userInfo.email}
        />
        <input type="submit" value="Save Change" />
      </form>
    </div>
  );
};

export default ProfilePage;
