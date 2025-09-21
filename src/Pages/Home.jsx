import { DashBoardCard } from '../components/DashBoradCard'
import { ProjectionsChart } from '../components/ProjectionsChart'
import { RevenueLineChart } from '../components/RevenueChart'
import { ProductsTable } from '../components/ProductsTable'
import { TotalSalesDonut } from '../components/TotalSalesDonut'

import '../scss/Home.scss'
import { RevenueByLocation } from '../components/RevenueByLocation'

export const Home = ({setPage}) => {
    return <div className="home-wrapper">
        <p className="home-title">e Commerce</p>

        <div class="dashboard-container">
  <div className="cards-section">
    <div class="cards-grid">
      <div class="dashboard-card"><DashBoardCard title="Customers" value="3,781" variance="+11.01" /></div>
      <div class="dashboard-card" onClick={()=>{setPage(false)}}><DashBoardCard title="Orders" value="1,219" variance="+3.01"/></div>
    </div>
    <div class="cards-grid">
      <div class="dashboard-card"><DashBoardCard title="Revenue" value="$695" variance="+15.03"/></div>
      <div class="dashboard-card"><DashBoardCard title="Growth" value="30.1%" variance="+6.08"/></div>
    </div>
  </div>
  <div class="chart-section">
        <ProjectionsChart/>
  </div>

</div>

<div className="home-section-2">
    <div className="home-section-2-graph">
    <RevenueLineChart />
    </div>
    <div>
<RevenueByLocation/>
    </div>

</div>

<div className="home-section-3">
    <div>
        <ProductsTable/>
    </div>
    <div>
        <TotalSalesDonut/>
    </div>
</div>

        </div>
}
