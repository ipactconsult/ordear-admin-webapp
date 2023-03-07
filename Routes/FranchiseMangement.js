const exp=require('express')
const route=exp.Router()
const FranchiseAccounts=require('../Entities/FranchiseAccounts')
route.post('/add_Franchise',async(req,res)=>{
    FranchiseAccounts.create({
        Franchise_name:req.body.FranchiseName,  
        Belongs_to:req.body.Belongs_to
    },(err,docs)=>{if(err) res.send(err) 
        else res.send(docs)})
})
module.exports=route