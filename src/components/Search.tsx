import { Link } from "react-router";

function Search({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (term: string) => void }) {
  return (
    <div className="Search">
      <input
        type="text"
        className="search"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link to="/add" className='read' style={{ marginLeft: 15 }}>
        <span>Add</span>
      </Link>
    </div>
  );
}

export default Search;