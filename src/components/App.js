import React from "react";
import client from "../Config/gql_config";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import Students from "../components/Students";

function App() {
  return (
    <ApolloProvider client={client}>
      <Students />
    </ApolloProvider>
  );
}

export default App;
