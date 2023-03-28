package com.dollarsbank.exceptions;

import javax.servlet.ServletException;

public class DollarsBankException extends ServletException {

	private static final long serialVersionUID = 1L;
	
	public DollarsBankException(String message) {
		super(message);
	}

}
