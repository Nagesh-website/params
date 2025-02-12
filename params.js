

let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer(async (req, res) => {

    var parsedurl = url.parse(req.url, true);

    // console.log(parsedurl.pathname);
    

    if(parsedurl.pathname=="/products" && req.method=="GET"){

        fs.readFile("index_1.json","utf-8",(err,data)=>{

            if(err){
                res.write(JSON.stringify({message:"error"}));
                res.end();
            }else if(parsedurl.query.cate){

                var dataa=JSON.parse(data);
                // // console.log(dataval.products);
                // // var cate=parsedurl.query.cate;
                if(parsedurl.query.cate=="a"){
                    var audio=dataa.products.filter((item)=>{
                        return item.category=="audio";
                    });
                    res.write((JSON.stringify(audio)));
                    res.end();
                }
                else if(parsedurl.query.cate=="m"){
                    var mobile=dataa.products.filter((item)=>{
                        return item.category=="mobile";
                    });
                    res.write((JSON.stringify(mobile)));    
                    res.end();
                }
                else if(parsedurl.query.cate=="g"){
                    var gaming=dataa.products.filter((item)=>{
                        return item.category=="gaming";
                    });
                    res.write((JSON.stringify(gaming)));    
                    res.end();
                }
                else if(parsedurl.query.cate=="tv"){
                    var tv=dataa.products.filter((item)=>{
                        return item.category=="tv";
                    });
                    res.write((JSON.stringify(tv)));    
                    res.end();
                }
                else if(parsedurl.query.cate){
                    
                    res.write((JSON.stringify("no category found")));    
                    res.end();
                }
                else{
                    res.write(JSON.stringify({message:"resorce not found"}));
                    res.end();
                }
               
            }
            else{
                res.write(data);
                res.end();
            }
            res.end();

        })

    }else{
        res.write(JSON.stringify({message:"resorce not found"}));
        res.end();
    }

});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});