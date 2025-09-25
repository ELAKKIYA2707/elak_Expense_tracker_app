import React, { useState } from 'react'
import './styles/App.css'

function App() {
  const [currentView, setCurrentView] = useState('login')
  const [user, setUser] = useState(null)

  const handleLogin = () => {
    setUser({ name: 'Demo User' })
    setCurrentView('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentView('login')
  }

  if (currentView === 'login') {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="logo">
            <i className="fas fa-chart-line"></i>
            <h1>ExpenseTracker</h1>
          </div>
          
          <h2>Welcome</h2>
          <p>Sign in to manage your expenses</p>
          
          <div className="tabs">
            <button className="tab active">Login</button>
            <button className="tab">Register</button>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Enter your email"
                defaultValue="email@example.com"
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-control" 
                placeholder="Enter your password"
                defaultValue="password123"
                required 
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
          
          <div className="demo-credentials">
            <p>Demo credentials: email@example.com / password123</p>
            <button className="btn btn-outline btn-block" onClick={handleLogin}>
              Use Demo Account
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-chart-line"></i>
              <h1>ExpenseTracker</h1>
            </div>
            <div className="user-info">
              <span>Welcome back, {user?.name}!</span>
              <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="dashboard-content">
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Total Balance</h3>
              <div className="amount negative">$ -5,000.00</div>
              <p>Current account balance</p>
            </div>
            
            <div className="summary-card income">
              <h3>Monthly Income</h3>
              <div className="amount positive">+ $0.00</div>
              <p>This month's income</p>
            </div>
            
            <div className="summary-card expense">
              <h3>Monthly Expenses</h3>
              <div className="amount negative">- $5,000.00</div>
              <p>This month's expenses</p>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary">
              <i className="fas fa-plus-circle"></i> Add Income
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-minus-circle"></i> Add Expense
            </button>
          </div>

          <div className="card">
            <h3>Recent Transactions</h3>
            <p>No transactions yet. Add your first transaction to get started.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App