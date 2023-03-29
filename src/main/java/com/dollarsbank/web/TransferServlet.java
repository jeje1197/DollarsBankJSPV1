package com.dollarsbank.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dollarsbank.controller.AccountController;
import com.dollarsbank.utils.JSONHelper;

@WebServlet("/transfer")
public class TransferServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public TransferServlet() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int userAccountId = Integer.parseInt(request.getParameter("userAccountId"));
		int otherAccountId = Integer.parseInt(request.getParameter("otherAccountId"));
		double amount = Double.parseDouble(request.getParameter("amount"));
		
		AccountController.transferFunds(userAccountId, otherAccountId, amount);
		
		Map<String, String> responseMap = new HashMap<>();
		responseMap.put("id", String.valueOf(userAccountId));
		responseMap.put("balance", String.valueOf(AccountController.getBalance(userAccountId)));
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		response.getWriter().append(JSONHelper.toJSON(responseMap));
	}
}
