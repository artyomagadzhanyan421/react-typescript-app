import { useState } from 'react';
import useFetch from "../hooks/useFetch";
import Table from "../components/Table";
import Search from "../components/Search";
import { TypeUser } from "../types/User";

function Home() {
  const { data, loading, error } = useFetch<TypeUser[]>("https://react-typescript-api-orcin.vercel.app/users");
  const [searchTerm, setSearchTerm] = useState("");

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
    return <div style={screen}>Loading...</div>
  } if (error) {
    return <div style={screen}>Failed to load API...</div>
  } else {
    return (
      <div className="Home">
        <div className="homeWrap">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {data && <Table data={data} searchTerm={searchTerm} />}
        </div>
      </div>
    );
  }
}

export default Home;