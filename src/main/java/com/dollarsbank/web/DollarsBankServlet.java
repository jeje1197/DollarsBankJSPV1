package com.dollarsbank.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DollarsBankServlet
 */
@WebServlet("/DollarsBankServlet")
public class DollarsBankServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DollarsBankServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		
		PrintWriter out = response.getWriter();
		
		String code = "<html><body>" + "<h2>Welcome to Joseph's First Servlet</h2>" + "</body></html>";
		
		out.print(code);
	}

}
