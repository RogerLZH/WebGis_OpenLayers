package DataBase;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Created by roger on 4/17/17.
 */
public class DBconnection extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Connection conn = null;
        String sql;
        // String SearchText = request.getParameter("value");
        // String Result;

        String url = "jdbc:mysql://localhost:3306/WebGis?" + "user=root&password=123&useUnicode=true&characterEncoding=UTF8";
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            sql = "SELECT Lat, Lon FROM POI WHERE title ='中国地质大学' ";
            int result = stmt.executeUpdate(sql);
            if(result != -1){
                PrintWriter out = response.getWriter();
                out.print(sql);
            }
            conn.close();
        }catch (SQLException e){

        }catch (Exception e){

        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
