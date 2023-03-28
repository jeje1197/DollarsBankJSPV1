package com.dollarsbank.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dollarsbank.controller.AccountController;
import com.dollarsbank.utils.JSONHelper;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LoginServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, String> map = JSONHelper.toMap(request.getReader());
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		String username = map.get("username");
		String password = map.get("password");
		
		System.out.println(map);
		
		int accountId = AccountController.login(username, password);
		response.getWriter().append("" + accountId);
	}

}
