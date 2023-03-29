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

@WebServlet("/customerInfo")
public class CustomerInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public CustomerInfoServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));
		
		Map<String, String> map = AccountController.getCustomerInformation(id);

		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		response.getWriter().append(JSONHelper.toJSON(map));
	}
}
