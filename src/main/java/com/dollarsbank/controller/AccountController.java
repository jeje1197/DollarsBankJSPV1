package com.dollarsbank.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.dollarsbank.model.Account;

public class AccountController {
	private static int assignableId = 1;
	private static List<Account> accounts = new ArrayList<>();
	
	public static boolean createAccount(String name, String email, String phone, String username, String password) {
		Account newAccount = new Account(assignableId++, name, email, phone, username, password, 0);
		accounts.add(newAccount);
		return true;
	}
	
	public static int login(String username, String password) {
		Optional<Account> userAccount = accounts.stream().filter((account) -> { 
			return username == account.getUsername() && password == account.getPassword();
		}).findFirst();

		if (userAccount.isEmpty()) return -1;
		return userAccount.get().getId();
	}
	
	private static Account findAccountWithId(int id) {
		Optional<Account> userAccount = accounts.stream().filter((account) -> id == account.getId())
				.findFirst();
		return userAccount.isPresent() ? userAccount.get() : null;
	}
	
	public static double getBalance(int id) {
		Account userAccount = findAccountWithId(id);
		return userAccount.getBalance();
	}
	
	public static boolean deposit() {
		return false;
	}
	
	public static boolean withdraw() {
		return false;
	}
}
