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

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LoginServlet() {
        super();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, String> map = JSONHelper.toMap(request.getReader());
		System.out.println(map);
		
		int accountId = AccountController.login(
				map.get("username"), 
				map.get("password")
		);
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		
		Map<String, String> responseMap = new HashMap<>();
		map.put("id", String.valueOf(accountId));
		System.out.println(responseMap);
		
		response.getWriter().append(JSONHelper.toJSON(responseMap));
		
	}

}
