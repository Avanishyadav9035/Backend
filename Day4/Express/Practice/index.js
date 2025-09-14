const express = require("express")
const { v4: uuid } = require('uuid');

const app = express()

let db = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    bio: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 5499,
    bio: "A smart watch that tracks fitness and receives notifications."
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 999,
    bio: "Ergonomic laptop stand to improve posture and cooling."
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 1299,
    bio: "10,000mAh power bank for on-the-go device charging."
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1999,
    bio: "Compact speaker with powerful bass and 10-hour battery life."
  }
];

app.use(express.json())

app.get("/api/products",(req,res)=>{
    res.status(202).json(db)
})

// app.get("/api/products/:id",(req,res)=>{
//     const{ id } = req.params
//    // console.log(id)

//    let foundProducts = db.find((item)=>{
//      return item.id == id
    
//    })
//     res.status(200).json(foundProducts)
// })

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;

    // find product by id
    let foundProduct = db.find(item => item.id == id);

    if (!foundProduct) {
        return res.status(404).json({ error: "Product not found" });
    }

    console.log(foundProduct);
    res.status(200).json(foundProduct);
});

app.get("/api/product-filter",(req,res)=>{
    const{ price } = req.query
    const filteredProducts = db.filter((item)=>{
         //console.log(item.price, price)
        return item.price>=price
    })
    res.status(202).json(filteredProducts)
})

app.post("/api/products/new",(req,res)=>{
    const{name, price, bio } = req.body

    if(!name || !price || !bio){
        return res.status(404).json({ error:"All fields (name, price, bio) are required"})
    }
    const newProduct = {
        id:uuid(),
        name,
        price,
        bio
    }
    db.push(newProduct)
    res.status(201).json({message:"Added Successfully", product:newProduct})
})

app.patch("/api/products/edit/:id",(req,res)=>{
    const{ id } = req.params
    const{name, price, bio } = req.body

    //find product
    let product = db.find(item=>item.id == id);

    if(!product){
        return res.status(404).json({error:"Prodcut not found!"})
    }
    if(name) product.name = name;
    if(price) product.price = price;
    if(bio) product.bio = bio;

    res.status(202).json({message:"Update Successfully",product})
})

app.delete("/api/product-delete/:id", (req, res) => {
  const { id } = req.params;
  const product = db.find(item => item.id == id);
  if (!product) return res.status(404).json({ error: "Product not found!" });

  // delete using filter
   db = db.filter(item => item.id != id);
   
  res.status(200).json({ message: "Product removed successfully", deleted: product });
});


app.listen(8081,()=>{
    console.log("Server is connected to PORT 8081")
})