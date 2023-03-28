package com.dollarsbank.utils;

import java.io.Reader;
import java.lang.reflect.Type;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class JSONHelper {
	private static Gson gson = new Gson();
	
	public static Map<String, String> toMap(Reader reader) {
		return gson.fromJson(reader, Map.class);
	}
	
	public static Map<String, String> toMap(String JSONString) {
		return gson.fromJson(JSONString, Map.class);
	}
	
	public static String toJSON(Map<String, String> map) {
		Type gsonType = new TypeToken<Map>(){}.getType();
		String json = gson.toJson(map, gsonType);
		return json;
	}
}
