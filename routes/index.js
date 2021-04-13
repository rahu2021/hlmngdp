var express=require("express")
var router=express.Router()

router.get("/",(req,res,next)=>{
	res.json(req.query)
})

router.post("/",(req,res,next)=>{
	res.json(req.body)
})

router.patch("/:id",(req,res,next)=>{
	res.json({...req.params,...req.body})
})

router.delete("/:id",(req,res,next)=>{
	res.json(req.params)
})

module.exports=router