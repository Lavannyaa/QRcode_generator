const express=require("express");
const cors=require("cors");
const QRCode=require("qrcode");

const app=express();

app.use(cors());

app.use(express.json());

app.post("/generate",async(req,res)=>{

    const text=req.body.text;

    if(!text){

        return res.status(400).json({

            message:"Text is required"

        });

    }

    try{

        const qr=await QRCode.toDataURL(text);

        res.json({

            qr:qr

        });

    }

    catch(err){

        res.status(500).json({

            message:"QR Generation Failed"

        });

    }

});

app.listen(5000,()=>{

    console.log("Server running at http://localhost:5000");

});