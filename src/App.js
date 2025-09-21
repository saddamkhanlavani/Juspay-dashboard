import './App.scss';
import { useState } from "react"
import { Layout } from './pages/Layout.jsx'
import { OrderList } from './components/OrderList.jsx'
import { Home } from './pages/Home.jsx'



const  App = ( ) =>  {

  const [page, setPage] = useState(true)
  return (
    <div className="App">

<Layout>
        {page ?         
        <Home setPage={setPage}/>:         
        <OrderList/>}
      </Layout>



    </div>
  );
}

export default App;
