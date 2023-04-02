import './css/ExpenseItemDate.css'

function ExpenseItemDate(props) {
    const month=props.expenseDate.toLocaleString('en-US', {month:'long'})                                                               
    const day=props.expenseDate.toLocaleString('en-US', {day:'2-digit'})                                                               
    const year = props.expenseDate.getFullYear() 
    
    return (
        <div className="expense-item-date">
            <div className="expense-item-date-month">
                {month}
            </div>
            <div className="expense-item-date-day">
                {day}
            </div>
            <div className="expense-item-date-year">
                {year}
            </div>
        </div>
    )
}

export default ExpenseItemDate