package com.dollarsbank.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import com.dollarsbank.exceptions.DollarsBankException;
import com.dollarsbank.model.Account;

public class AccountController {
	private static int assignableId = 1;
	private static List<Account> accounts = new ArrayList<>();
	
	public static boolean createAccount(String name, String email, String phone, String username, String password) {
		Account newAccount = new Account(assignableId++, name, email, phone, username, password, 0);
		accounts.add(newAccount);
		return true;
	}
	
	public static int login(String username, String password) throws DollarsBankException {
		Optional<Account> userAccount = accounts.stream().filter((account) -> { 
			return username.equals(account.getUsername()) && password.equals(account.getPassword());
		}).findFirst();
		
		if (userAccount.isEmpty()) {
			throw new DollarsBankException("Could not find account.");
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
		if (amount <= 0) return false;
		
		Account userAccount = findAccountWithId(id);
		userAccount.setBalance(amount + userAccount.getBalance());
		return true;
	}
	
	public static boolean withdraw(int id, double amount) throws DollarsBankException {
		if (amount <= 0) return false;

		Account userAccount = findAccountWithId(id);
		userAccount.setBalance(userAccount.getBalance() - amount);
		return true;
	}
	
	// Funds Transfer
	
	// Recent transaction
	
	// 
}
