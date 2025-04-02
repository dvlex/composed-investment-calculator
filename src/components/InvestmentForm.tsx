import { IInvestmentData } from "@/interfaces/IInvestmentData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"

function InvestmentForm({
  investmentData,
  setInvestmentData,
}: {
  investmentData: IInvestmentData;
  setInvestmentData: React.Dispatch<React.SetStateAction<IInvestmentData>>;
}) {
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInvestmentData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value)
    }))
  }

  return (
    <Card className="form">
      <CardHeader>
        <CardTitle>Investment Data</CardTitle>
        <CardDescription>
          Please add the data to calculate the composed investment
        </CardDescription>
      </CardHeader>
      <CardContent className="text-left space-y-4">
        <div className="form-element">
          <label htmlFor="initialInvestment">Initial Investment:</label>
          <Input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            value={investmentData.initialInvestment}
            onChange={handleInvestmentChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="annualInvestment">Annual Investment:</label>
          <Input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            value={investmentData.annualInvestment}
            onChange={handleInvestmentChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="expectedReturn">Expected Return (%):</label>
          <Input
            type="number"
            id="expectedReturn"
            name="expectedReturn"
            value={investmentData.expectedReturn}
            onChange={handleInvestmentChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="duration">Duration (years):</label>
          <Input
            type="number"
            id="duration"
            name="duration"
            value={investmentData.duration}
            onChange={handleInvestmentChange}
          />
        </div>
      </CardContent>
      <CardFooter className="text-xs">
        <p>Developed for AurenFX</p>
      </CardFooter>
    </Card>
  )
}

export default InvestmentForm
