import React from "react";
import { useQuery, gql } from "@apollo/client";

const Get_Students = gql`
  query GetAllStudents {
    students {
      id
      name
      email
      age
    }
  }
`;

export default function Students() {
  const { loading, error, data } = useQuery(Get_Students);

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>Error</h3>;

  const { students } = data;

  return (
    <div>
      <h1>Students List!</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std, lol) => {
            return (
              <tr key={lol}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.email}</td>
                <td>{std.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
