var express=require("express")
var router=express.Router()
var models=require("../models")
router.get("/",(req,res,next)=>{
	models
	.products
	.find()
	.then(d=>res.json(d))
	.catch(d=>res.json(d))

})

router.post("/",(req,res,next)=>{
	models
	.products
	.create(req.body)
	.then(d=>res.json(d))
	.catch(d=>res.json(d))
	
})

router.patch("/:id",(req,res,next)=>{
	models
	.products
	.findOne({_id:req.params.id})
	.then(d=>{
			d.title=req.body.title
			d.description=req.body.description
			d.price=req.body.price
			d.tags=req.body.tags
			d.colors=req.body.colors
			d.size=req.body.size
		return d.save()
	})
	.then(d=>res.json(d))
	.catch(d=>res.json(d))
	
})

router.delete("/:id",(req,res,next)=>{
	models
	.products
	.findByIdAndDelete(req.params.id)
	.then(d=>res.json(d))
	.catch(d=>res.json(d))
	
})

module.exports=router