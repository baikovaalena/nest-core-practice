import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto.js';
import { UpdateExpenseDto } from './dto/update-expense.dto.js';

@Injectable()
export class ExpensesService {
  private expenses: {
    id: number;
    amount: number;
    description: string;
    date: string;
    categoryId: number;
  }[] = [];
  private nextId = 1;

  create(createExpenseDto: CreateExpenseDto) {
    const newExpense = {
      id: this.nextId++,
      ...createExpenseDto,
    };
    this.expenses.push(newExpense);

    return newExpense;
  }

  findAll() {
    return this.expenses;
  }

  findOne(id: number) {
    return this.expenses.find((expense) => expense.id === id);
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expenseIndex = this.expenses.findIndex(
      (expense) => expense.id === id,
    );
    if (expenseIndex === -1) {
      return null;
    }
  }

  remove(id: number) {
    const expense = this.expenses.find((expense) => expense.id === id);

    if (!expense) {
      return null;
    }

    this.expenses = this.expenses.filter((expense) => expense.id !== id);
    return expense;
  }
}
