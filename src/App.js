import './App.scss';

import { Layout } from './Pages/Layout.jsx'
import { OrderList } from './Components/OrderList.jsx'
import { Home } from './Pages/Home.jsx'

function App() {
  return (
    <div className="App">

<Layout>
        {/* <OrderList /> */}
        <Home/>

      </Layout>

    </div>
  );
}

export default App;
