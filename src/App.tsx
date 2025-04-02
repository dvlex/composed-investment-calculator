import { useState } from 'react'
import './App.css'
import InvestmentForm from './components/InvestmentForm'
import InvestmentsTable from './components/InvestmentsTable'


function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  return (
    <div className="w-3/4 mx-auto mt-10">
      <InvestmentForm
        investmentData={investmentData}
        setInvestmentData={setInvestmentData}
      />
      <InvestmentsTable investmentData={investmentData} />
    </div>
  )
}

export default App
