import { Layout } from "./components";
import { News } from "./screens";

const App = () => {
  return (
    <div className="App">
      <Layout className="app" />
      
      <hr /> 
      
      <Layout className="app2">
        <News />
      </Layout>

    </div>
  );
}; 

export default App;