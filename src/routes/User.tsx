import { useParams } from "react-router";

// Types
import { TypeUser } from "../types/User";

// Hooks
import useFetch from "../hooks/useFetch";

function User() {
  const { id } = useParams<{ id: string }>();

  const { data: user, loading, error } = useFetch<TypeUser>(`https://react-typescript-api-orcin.vercel.app/users/${id}`);

  const screen = {
    background: "#111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    minHeight: "100vh"
  }

  if (loading) {
    document.title = "Loading...";

    return <div style={screen}>Loading...</div>;
  } if (error) {
    document.title = "Error";

    return <div style={screen}>Failed to load API...</div>;
  } if (!user) {
    document.title = "No user found";

    return <div style={screen}>No user found...</div>;
  } else {
    document.title = `${user.name}`;

    return (
      <div className="User">
        <div className="homeWrap">
          <table cellSpacing="0">
            <tr>
              <th colSpan={2} style={{ textAlign: "center" }}>{user.name}</th>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{user.website}</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default User