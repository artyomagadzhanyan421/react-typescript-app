import { Link } from 'react-router';

// Types 
import { TypeUser } from '../types/User';

type TableProps = {
  data: TypeUser[];
  searchTerm: string;
}

function Table({ data, searchTerm }: TableProps) {
  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th colSpan={2}>Email</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0 ? (
          filteredData.map((object) => (
            <tr key={object._id}>
              <td>{object.name}</td>
              <td>{object.username}</td>
              <td>{object.email}</td>
              <td>
                <Link to={`/user/${object._id}`} className='read'>
                  <span>Details</span>
                </Link>
                <Link to={`/edit/${object._id}`} className='read' style={{ marginLeft: 15 }}>
                  <span>Edit</span>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr style={{ background: "#374151" }}>
            <td colSpan={4}>No user found...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;