'use client'

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { CreditCard, DollarSign, TrendingUp, Receipt } from "lucide-react"

export default function PaymentsPage() {
  const transactions = [
    { id: 1, type: "income", description: "Tomato Harvest Sale", amount: 1250.0, date: "2025-01-08", status: "completed" },
    { id: 2, type: "expense", description: "Fertilizer Purchase", amount: -320.5, date: "2025-01-05", status: "completed" },
    { id: 3, type: "income", description: "Lettuce Harvest Sale", amount: 890.0, date: "2025-01-03", status: "completed" },
    { id: 4, type: "expense", description: "Irrigation System Maintenance", amount: -450.0, date: "2024-12-28", status: "completed" },
    { id: 5, type: "income", description: "Carrot Harvest Sale", amount: 675.0, date: "2024-12-25", status: "completed" },
    { id: 6, type: "expense", description: "Seeds Purchase", amount: -180.0, date: "2024-12-20", status: "completed" },
  ]

  const totalIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = Math.abs(transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0))
  const netProfit = totalIncome - totalExpenses

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <SidebarInset className="flex-1 overflow-auto">
          <div className="p-8 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Payments</h1>
              <p className="text-muted-foreground mt-1">Track your income, expenses, and transactions</p>
            </div>

            {/* Financial Overview */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Income</p>
                    <p className="text-2xl font-bold">${totalIncome.toFixed(2)}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                    <Receipt className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Expenses</p>
                    <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Net Profit</p>
                    <p className="text-2xl font-bold">${netProfit.toFixed(2)}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <CreditCard className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold">$0.00</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Transactions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${transaction.type === "income" ? "bg-green-500/10" : "bg-red-500/10"}`}>
                        {transaction.type === "income" ? <TrendingUp className="h-5 w-5 text-green-500" /> : <Receipt className="h-5 w-5 text-red-500" />}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-semibold ${transaction.type === "income" ? "text-green-500" : "text-red-500"}`}>
                        {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">{transaction.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}