
import { calculateInvestmentResults, formatter } from "@/utils/investment"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { IInvestmentData } from "@/interfaces/IInvestmentData"


function InvestmentsTable({ investmentData }: {investmentData: IInvestmentData}) {
  const generateInvestmentData = calculateInvestmentResults({
    ...investmentData
  })

  return (
    <Table className="text-white">
      <TableHeader className="bg-transparent">
        <TableRow className="hover:bg-transparent">
          <TableHead className="text-left">Year</TableHead>
          <TableHead className="text-right">Investment Value</TableHead>
          <TableHead className="text-right">Interest (year)</TableHead>
          <TableHead className="text-right">Total Interest</TableHead>
          <TableHead className="text-right">Invested Capital</TableHead>
        </TableRow>
      </TableHeader>
      <tbody aria-hidden="true" className="table-row h-2"></tbody>
      <TableBody>
        {generateInvestmentData.map((data, index) => (
          <TableRow
            key={index}
            className="odd:bg-muted/5 odd:hover:bg-muted/50 border-none hover:bg-muted/15"
          >
            <TableCell className="text-left font-medium">{data.year}</TableCell>
            <TableCell className="text-right">{formatter.format(data.valueEndOfYear)}</TableCell>
            <TableCell className="text-right">{formatter.format(data.interest)}</TableCell>
            <TableCell className="text-right">{formatter.format(data.totalInterest)}</TableCell>
            <TableCell className="text-right">{formatter.format(data.investedCapital)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <tbody aria-hidden="true" className="table-row h-2"></tbody>
    </Table>
  )
}

export default InvestmentsTable
