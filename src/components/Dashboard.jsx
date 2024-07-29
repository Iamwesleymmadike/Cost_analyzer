import React from 'react';
import Header from './Header';
import SummaryCard from './SummaryCard';
import SearchAndFilters from './SearchAndFilter';
import DataTable from './DataTable';
import Top10Costs from './Top10Costs';
import '../App.css';

const Dashboard = () => (
  <div className='App'>
    <Header />
    <div className="dashboard">
      <main className="main-content">
        <SummaryCard />
        <SearchAndFilters />
        <DataTable />
        <Top10Costs />
      </main>
    </div>
  </div>
);

export default Dashboard;
