package com.dollarsbank.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dollarsbank.controller.AccountController;
import com.dollarsbank.utils.JSONHelper;

@WebServlet("/recentTransactions")
public class RecentTransactionsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public RecentTransactionsServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));
		
		List<String> recentTransactions = AccountController.getRecentTransactions(id);
		Map<String, String> responseMap = new HashMap<>();
		responseMap.put("id", String.valueOf(id));
		responseMap.put("transactions", JSONHelper.toJSON(recentTransactions));
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		response.getWriter().append(JSONHelper.toJSON(responseMap));
	}

}
