package DataBase;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by roger on 4/17/17.
 */
public class DBconnection extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Connection conn = null;
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        String sql;
        String SearchText = request.getParameter("Search");
        ResultSet Result;

        JSONArray jsonArray = new JSONArray();
        JSONObject jsonObject = null;

        String url = "jdbc:mysql://localhost:3306/poi?" + "user=root&password=123&useUnicode=true&characterEncoding=UTF8";
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            sql = "SELECT lat, lng, title FROM poibulk WHERE title LIKE '%"+SearchText+"%'";
            Result = stmt.executeQuery(sql);
            while(Result.next()){
              jsonObject = new JSONObject();
              jsonObject.put("poi_Title", Result.getString("title"));
              jsonObject.put("Lat", Result.getString("lat"));
              jsonObject.put("Lng", Result.getString("lng"));
              jsonArray.add(jsonObject);
            }
            PrintWriter out = response.getWriter();
            out.print(jsonArray);
            Result.close();
            stmt.close();
            conn.close();

        }catch (SQLException e){

        }catch (Exception e){

        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
