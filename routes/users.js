var express=require("express")
var router=express.Router()
var models=require("../models")
router.get("/",(req,res,next)=>{
	models
	.users
	.find()
	.then(d=>res.json(d))
	.catch(d=>res.json(d))

})

router.post("/",(req,res,next)=>{
	models
	.users
	.create(req.body)
	.then(d=>res.json(d))
	.catch(d=>res.json(d))
	
})

router.patch("/:id",(req,res,next)=>{
	models
	.users
	.findOne({_id:req.params.id})
	.then(d=>{
		d.name=req.body.name
		d.email=req.body.email
		d.phone=req.body.phone
		d.password=req.body.password
		return d.save()
	})
	.then(d=>res.json(d))
	.catch(d=>res.json(d))
	
})

router.delete("/:id",(req,res,next)=>{
	models
	.users
	.findByIdAndDelete(req.params.id)
	.then(d=>res.json(d))
	.catch(d=>res.json(d))
	
})

module.exports=router