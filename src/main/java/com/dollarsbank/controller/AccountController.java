package com.dollarsbank.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import com.dollarsbank.exceptions.DollarsBankException;
import com.dollarsbank.model.Account;

public class AccountController {
	private static int assignableId = 1;
	private static List<Account> accounts = new ArrayList<>();
	
	public static boolean createAccount(String name, String email, String phone, String username, String password) {
		Account newAccount = new Account(assignableId++, name, email, phone, username, password, 0);
		newAccount.addTransaction("Account created");
		accounts.add(newAccount);
		return true;
	}
	
	public static int login(String username, String password) throws DollarsBankException {
		Optional<Account> userAccount = accounts.stream().filter((account) -> { 
			return username.equals(account.getUsername()) && password.equals(account.getPassword());
		}).findFirst();
		
		if (userAccount.isEmpty()) {
			throw new DollarsBankException("Invalid Login Credentials");
		}
		return userAccount.get().getId();
	}
	
	private static Account findAccountWithId(int id) throws DollarsBankException {
		Optional<Account> userAccount = accounts.stream().filter((account) -> id == account.getId())
				.findFirst();
		if (userAccount.isPresent()) {
			return userAccount.get();
		}
		throw new DollarsBankException("Could not find account.");
	}
	
	public static double getBalance(int id) throws DollarsBankException {
		Account userAccount = findAccountWithId(id);
		return userAccount.getBalance();
	}
	
	public static boolean deposit(int id, double amount) throws DollarsBankException {
		if (amount <= 0) {
			throw new DollarsBankException("Invalid deposit amount.");
		}
		
		Account userAccount = findAccountWithId(id);
		userAccount.setBalance(amount + userAccount.getBalance());
		userAccount.addTransaction("Deposited $" + String.format("%.2f", amount));
		return true;
	}
	
	public static boolean withdraw(int id, double amount) throws DollarsBankException {
		Account userAccount = findAccountWithId(id);
		if (amount <= 0 && amount >= userAccount.getBalance()) {
			throw new DollarsBankException("Invalid withdrawl amount.");
		}
		
		userAccount.setBalance(userAccount.getBalance() - amount);
		userAccount.addTransaction("Withdrew $" + String.format("%.2f", amount));
		return true;
	}

	// Funds Transfer
	public static boolean transferFunds(int userAccountId, int otherAccountId, double amount) throws DollarsBankException {
		Account userAccount = findAccountWithId(userAccountId);
		Account otherAccount = findAccountWithId(otherAccountId);
		if (amount <= 0 && amount >= userAccount.getBalance()) {
			throw new DollarsBankException("Invalid withdrawl amount.");
		}
		
		userAccount.setBalance(userAccount.getBalance() - amount);
		otherAccount.setBalance(otherAccount.getBalance() + amount);
		userAccount.addTransaction("Transfered $" + String.format("%.2f", amount) + " to account " + otherAccountId);
		otherAccount.addTransaction("Received $" + String.format("%.2f", amount) + " from account " + userAccountId);
		return true;
	}
	
	// 5 Recent Transactions
	public static List<String> getRecentTransactions(int id) throws DollarsBankException {
		Account userAccount = findAccountWithId(id);
		List<String> transactions = userAccount.getTransactions();
		return transactions.stream().skip(Math.max(0, transactions.size() - 5)).collect(Collectors.toList());
	}

	// Customer Information
	public static Map<String, String> getCustomerInformation(int id) throws DollarsBankException {
		Account userAccount = findAccountWithId(id);
		Map<String, String> customerInfo = new HashMap<>();
		customerInfo.put("name", userAccount.getName());
		customerInfo.put("email", userAccount.getEmail());
		customerInfo.put("phone", userAccount.getPhone());
		return customerInfo;
	}
}
