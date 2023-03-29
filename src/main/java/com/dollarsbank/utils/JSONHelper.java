package com.dollarsbank.utils;

import java.io.Reader;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

public class JSONHelper {
	private static Gson gson = new Gson();
	
	@SuppressWarnings("unchecked")
	public static Map<String, String> toMap(Reader reader) {
		return gson.fromJson(reader, Map.class);
	}
	
	@SuppressWarnings("unchecked")
	public static Map<String, String> toMap(String JSONString) {
		return gson.fromJson(JSONString, Map.class);
	}
	
	public static String toJSON(Map<String, String> map) {
		return gson.toJson(map);
//		StringBuilder sb = new StringBuilder();
//		sb.append('{');
//		
//		Iterator<Entry<String, String>> iter = map.entrySet().iterator();
//		while (iter.hasNext()) {
//			Entry<String, String> entry = iter.next();
//			sb.append('"' + entry.getKey() + '"' + ':' + '"' + entry.getValue() + '"');
//			if (iter.hasNext()) {
//				sb.append(',');
//			}	
//		}
//		
//		sb.append('}');
//		System.out.println(sb);
//		return sb.toString();
	}
	
	public static String toJSON(List<String> stringList) {
		return gson.toJson(stringList);
	}
}
