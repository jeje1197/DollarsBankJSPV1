package com.dollarsbank.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Account {
	private int id;
	
	private String name;
	private String email;
	private String phone;
	
	String username;
	String password;

	private double balance;
	private List<String> transactions = new ArrayList<>();

	public Account(int id, String name, String email, String phone, String username, String password, double balance) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.balance = balance;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
	
	public void addTransaction(String transaction) {
		this.transactions.add("[acc-" + id + "-"+ (transactions.size() + 1) + "] " + transaction + " - " + new Date() +
				" Current Balance: $" + String.format("%.2f", balance));
	}
	
	public List<String> getTransactions() {
		return transactions;
	}
	
}
