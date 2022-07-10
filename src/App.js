import logo from './logo.svg';
import './App.css';
import ExpenseItem from './component/ExpenseItem';
import NewExpense from './component/NewExpense/NewExpense';
import ExpenseForm from './component/NewExpense/ExpenseForm';
import ExpenseFilter from './component/NewExpense/ExpenseFilter';
import Card from './component/Card';
import { useState } from 'react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ];
  const[filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=selectedYear=>{
    console.log("Expenses.js")
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }
  return (
    <>
    <div>
      {/* <h2>Lets Get Started</h2> */}
      <NewExpense/>
      {/* <ExpenseForm/> */}
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      </Card>
      </div>

    </>
  );
}

export default App;
