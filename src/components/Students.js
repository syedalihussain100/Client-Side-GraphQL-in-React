import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id
      name
      email
      age
    }
  }
`;

const ADD_STUDENT = gql`
  mutation AddStudent($id: Int!, $email: String!, $age: Int!, $name: String!) {
    addStudent(input: { id: $id, name: $name, email: $email, age: $age }) {
      id
      name
    }
  }
`;

function Students() {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  const [addStd] = useMutation(ADD_STUDENT);

  if (loading) return <h1>Loading ...</h1>;

  if (error) return <h1>Error</h1>;

  const { students } = data;

  return (
    <div>
      <h1>Student List</h1>
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

      <button
        onClick={() =>
          addStd({
            variables: {
              id: 9,
              email: "lol@gmail.com",
              age: 28,
              name: "Student 7",
            },
            refetchQueries: [{ query: GET_STUDENTS }],
          })
        }
      >
        Add Student
      </button>
    </div>
  );
}

export default Students;
