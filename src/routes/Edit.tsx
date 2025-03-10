import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { SyntheticEvent } from "react";

// Hooks
import useFetch from "../hooks/useFetch";

// Types
import { TypeUser } from "../types/User";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: user, loading, error } = useFetch<TypeUser>(`${baseUrl}/${id}`);

  // Values
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const [edit, setEdit] = useState(false);
  const [trash, setTrash] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setUsername(user.username || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setWebsite(user.website || "");
    }
  }, [user]);

  const editFunc = (e: SyntheticEvent) => {
    e.preventDefault();

    setEdit(true);

    const userEdit = { name, username, email, phone, website }

    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userEdit)
    }).then(() => {
      navigate(-1);
    })
  }

  const deleteFunc = () => {
    setTrash(true);

    fetch(`${baseUrl}/${id}`, {
      method: "DELETE"
    }).then(() => {
      navigate(-1);
    })
  }

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
    document.title = `Edit ${user.name}`;

    return (
      <div className="Edit">
        <form onSubmit={editFunc}>
          <center><h2>Edit user</h2></center>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} required />
          <div className="buttons">
            <button className="read" disabled={edit}>
              <span>{edit ? "Editing..." : "Edit"}</span>
            </button>
            <button type="button" onClick={deleteFunc} className="read delete" disabled={trash}>
              <span>{trash ? "Trashing..." : "Trash"}</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit