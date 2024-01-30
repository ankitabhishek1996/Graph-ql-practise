import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  });


  return (
    <>
      <ApolloProvider client={client}>
        <ApolloClientSetting />
      </ApolloProvider>
    </>
  );
}

function ApolloClientSetting() {
  const QUERY_ALL_USERS = gql`
    query UserSelect {
      users {
        name
        age
      }
    }
  `;
  const { data } = useQuery(QUERY_ALL_USERS);
  return (
    <div className="App">
      <h1>List of User</h1>
      {console.log(data)}
      {data && data.users.map((s,index)=>{
        return <p key={index}>{s.name} - {s.age}</p>
      })}
    </div>
  );
}
export default App;
