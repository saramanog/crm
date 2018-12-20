//var mssql = require('mssql');
var mssql = require('mssql/msnodesqlv8');
var sqlConnection = require('../config')

 function Repository() {

   async function executeQuery (query) {
        
        var conn = new mssql.ConnectionPool(sqlConnection.sqlServerConnection);
        
        try 
         {
             await conn.connect();
            let result =  await new mssql.Request(conn).query(query);
            return result.recordset;
         }
        catch(err)
         {
            console.log(err);
         }
         finally
         {
             if(conn)
             {
                 conn.close().catch((error) => {
                     console.log(error);
                 });
             }
         }
    }

     Repository.executeQuery = executeQuery;
}

module.exports = Repository;