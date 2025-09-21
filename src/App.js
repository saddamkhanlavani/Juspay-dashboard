import Header from "./components/Header";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";
import OrderList from "./components/OrderList";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      
      {/* <SideBar /> */}
      <Layout>
        <OrderList />
      </Layout>
      
      {/* Other components below */}
    </div>
  );
}

export default App;
