// npm init -y & npm install express cors body-parser mongoose
const PORT=process.env.PORT||8080
var express=require("express")
var cors=require("cors")
var body=require("body-parser")
var index=require("./routes/index")
var users=require("./routes/users")
var products=require("./routes/products")

var app=express()
app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))

app.use("/",index)
app.use("/users",users)
app.use("/products",products)

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))