describe('Expense objects', function(){
	it('Should be of type ExpenseItem', function(){
		// we set no expectations so there was nothing to fail
		// use of the assertion
		// in jasmine assertions are created using matchers
		var expenseItem = new ExpenseItem(0);
		var expense = new Expense(expenseItem);

		expect(expense.expenseItem).toBe(expenseItem);
	});
	it('should have the correct expense amount', function(){
		var expenseItem = new ExpenseItem(100);
		var expense = new Expense(expenseItem);
		expect(expense.expenseItem.amount).toEqual(100);
	});
});