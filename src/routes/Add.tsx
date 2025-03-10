import { useState } from "react";
import { useNavigate } from "react-router";

function Add() {
  const navigate = useNavigate();

  // Values
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  // Disable
  const [disable, setDisbale] = useState(false);

  const addFunc = (e) => {
    e.preventDefault();

    setDisbale(true);

    const user = { name, username, email, phone, website };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user)
    }).then(() => {
      navigate(-1);
    })
  }

  return (
    <div className="Add">
      <form onSubmit={addFunc}>
        <center><h2>Create user</h2></center>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} required />
        <button type="submit" className="read">
          <span>{disable ? "Adding.." : "Add"}</span>
        </button>
      </form>
    </div>
  )
}

export default Add