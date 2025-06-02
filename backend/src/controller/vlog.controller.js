import { vlogs} from "../schema/vlog.schema.js"
const allProducts=async(req,res)=>{
    try {
        const vlogss=await vlogs.find()
        res.status(200).json({vlogss})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const addProduct =async(req,res)=>{
    try {
        const {title,vlog,author}=req.body
        if (!title || !vlog || !author)
            return res.status(400).json({message:"enter all credential"})
        const newV=await new vlogs({
            title,
            vlog,
            author,
        })
        newV.save()
        res.status(200).json({message:"added",data:newV})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export {addProduct,allProducts}