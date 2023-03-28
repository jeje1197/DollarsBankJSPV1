package com.dollarsbank.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dollarsbank.controller.AccountController;

@WebServlet("/balance")
public class AccountBalanceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public AccountBalanceServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));
		
		double balance = AccountController.getBalance(id);
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(String.valueOf(balance));
	}

}
