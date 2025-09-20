import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { DollarSign, TrendingUp, Target, Wallet } from "lucide-react";
import { useState } from "react";

const budgetData = [
  { name: 'Accommodation', value: 800, color: '#0ea5e9' },
  { name: 'Activities', value: 400, color: '#f97316' },
  { name: 'Food', value: 300, color: '#10b981' },
  { name: 'Transport', value: 250, color: '#8b5cf6' },
  { name: 'Shopping', value: 150, color: '#f59e0b' },
];

const dailySpending = [
  { day: 'Day 1', amount: 180 },
  { day: 'Day 2', amount: 150 },
  { day: 'Day 3', amount: 220 },
  { day: 'Day 4', amount: 190 },
  { day: 'Day 5', amount: 160 },
];

const BudgetTracker = () => {
  const [totalBudget, setTotalBudget] = useState(2500);
  const currentSpent = budgetData.reduce((sum, item) => sum + item.value, 0);
  const remaining = totalBudget - currentSpent;
  const percentageSpent = (currentSpent / totalBudget) * 100;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Budget Tracker
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Keep track of your travel expenses and stay within budget
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Budget Overview */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="h-5 w-5 mr-2 text-primary" />
                  Budget Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total Budget</label>
                  <div className="flex">
                    <div className="relative flex-1">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        value={totalBudget}
                        onChange={(e) => setTotalBudget(Number(e.target.value))}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gradient-card rounded-lg">
                    <div className="text-xl font-bold text-sunset">${currentSpent}</div>
                    <div className="text-sm text-muted-foreground">Spent</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-card rounded-lg">
                    <div className="text-xl font-bold text-tropical">${remaining}</div>
                    <div className="text-sm text-muted-foreground">Remaining</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Budget Used</span>
                    <span className="font-medium">{percentageSpent.toFixed(1)}%</span>
                  </div>
                  <Progress 
                    value={percentageSpent} 
                    className="h-2"
                  />
                </div>

                {percentageSpent > 80 && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="flex items-center text-destructive">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Budget Alert!</span>
                    </div>
                    <p className="text-sm text-destructive/80 mt-1">
                      You've used {percentageSpent.toFixed(1)}% of your budget
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Expense Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {budgetData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-3"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="font-medium">${item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Budget Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={budgetData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {budgetData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Daily Spending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailySpending}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Spent']} />
                      <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetTracker;