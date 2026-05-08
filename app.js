const express=require("express")
const app=express()
const path=require("node:path")

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.get("/create",(req,res)=>{
     const user=req.body.user
  
    res.render("form",{
        title:"user info",
       
    })
})
app.post("/create",(req,res)=>{
    
       const user=req.body.user
    const id=req.body.length
    res.render("form",{
        title:"user info",
        user:user,
        id:id
    })
})

const PORT=process.env.PORTS || 3000

app.listen(PORT,()=>{
    return `sever running on port:${PORT}`
})