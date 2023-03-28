package com.dollarsbank.utils;

import java.io.Reader;
import java.util.Map;

import com.google.gson.Gson;

public class JSONHelper {
	private static Gson gson = new Gson();
	
	public static Map<String, String> toMap(Reader reader) {
		return gson.fromJson(reader, Map.class);
	}
	
	public static Map<String, String> toMap(String JSONString) {
		return gson.fromJson(JSONString, Map.class);
	}
}
