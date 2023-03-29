package com.dollarsbank.utils;

import java.io.Reader;
import java.lang.reflect.Type;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
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
}
