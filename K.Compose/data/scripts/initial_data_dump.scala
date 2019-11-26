
import org.apache.spark.sql.SQLContext

val sqlContext = new SQLContext(sc)
val driver = "com.mysql.jdbc.Driver"

// ANY MYSQL DB
val userSrcDB = "root"
val passSrcDB = "password"
val urlSource = "jdbc:mysql://src-mysql:3306/sakila?useSSL=false"

// Prepare destination parameters
val userDestDB = "root"
val passDestDB = "password"
val nameDestDB = "myDB"
val prop = new java.util.Properties
prop.setProperty("user", userDestDB)
prop.setProperty("password", passDestDB)
val urlDest = s"jdbc:mysql://dst-mysql:3306/?useSSL=false"

// Importing countries

val df_iso_countries_oldDB = sqlContext.read.format("jdbc").option("url", urlSource).option("driver", driver).option("dbtable", "iso_countries").option("user", userSrcDB).option("password", passSrcDB).option("verifyServerCertificate", "false").load()

val df_countries_oldDB = sqlContext.read.format("jdbc").option("url", urlSource).option("driver", driver).option("dbtable", "countries").option("user", userSrcDB).option("password", passSrcDB).option("verifyServerCertificate", "false").load()

val df_countries_join_iso_oldDB = df_countries_oldDB.as("countries").join(df_iso_countries_oldDB.as("iso"),$"countries.country_name"===$"iso.printable_name")
df_countries_oldDB.write.mode("overwrite").parquet("data/temp/COUNTRIES")

val df_countries_newDB = df_iso_countries_oldDB.select($"id", $"printable_name" as "name",$"iso3" as "code")
df_countries_newDB.write.mode("append").jdbc(urlDest,"COUNTRIES",prop) // Overwrite existing countries

System.exit(0)
