import { DashBoardCard } from '../Components/DashBoradCard'
import { ProjectionsChart } from '../Components/ProjectionsChart'
import { RevenueLineChart } from '../Components/RevenueChart'
import { ProductsTable } from '../Components/ProductsTable'
import { TotalSalesDonut } from '../Components/TotalSalesDonut'

import '../scss/Home.scss'
import { RevenueByLocation } from '../Components/RevenueByLocation'

export const Home = () => {
    return <div className="home-wrapper">
        <p className="home-title">e Commerce</p>

        <div class="dashboard-container">
  <div class="cards-section">
    <div class="cards-grid">
      <div class="dashboard-card"><DashBoardCard title="Customers" value="3,781" variance="+11.01" /></div>
      <div class="dashboard-card"><DashBoardCard title="Orders" value="1,219" variance="+3.01"/></div>
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
