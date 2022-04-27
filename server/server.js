import express from 'express';
import cors from 'cors';
import { restart } from 'nodemon';

const server = express();
server.use(cors());

let jsonData = [
    {
        id:1,
        img: "../assets/flower1.jpg",
        title:"flower1",
        date:"April, 25th",
        description:"About flower 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere et aliquam rem modi similique accusantium temporibus, reiciendis beatae placeat possimus deleniti nulla quae delectus eligendi ipsum dicta autem, tenetur laborCupiditate fugit, neque ad distinctio numquam culpa enim reiciendis, consectetur vitae, sequi est. Magni possimus pariatur, mollitia commodi atque maiores, alias consectetur, doloribus ea delectus voluptas placeat eum optio aspernatur "
        
    },
    { 
        id:2,
        img: "../assets/flower2.jpg",
        title:"flower2",
        date:"May, 25th",
        description:"About flower 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere et aliquam rem modi similique accusantium temporibus, reiciendis beatae placeat possimus deleniti nulla quae delectus eligendi ipsum dicta autem, tenetur laborCupiditate fugit, neque ad distinctio numquam culpa enim reiciendis, consectetur vitae, sequi est. Magni possimus pariatur, mollitia commodi atque maiores, alias consectetur, doloribus ea delectus voluptas placeat eum optio aspernatur "
    },
    {
        id:3,
        img: "../assets/flower3.jpg",
        title:"flower3",
        date:"May, 25th",
        description:"About flower 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere et aliquam rem modi similique accusantium temporibus, reiciendis beatae placeat possimus deleniti nulla quae delectus eligendi ipsum dicta autem, tenetur laborCupiditate fugit, neque ad distinctio numquam culpa enim reiciendis, consectetur vitae, sequi est. Magni possimus pariatur, mollitia commodi atque maiores, alias consectetur, doloribus ea delectus voluptas placeat eum optio aspernatur "
    },
    {
        id:4,
        img: "../assets/flower4.jpg",
        title:"flower4",
        date:"May, 25th",
        description:"About flower 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere et aliquam rem modi similique accusantium temporibus, reiciendis beatae placeat possimus deleniti nulla quae delectus eligendi ipsum dicta autem, tenetur laborCupiditate fugit, neque ad distinctio numquam culpa enim reiciendis, consectetur vitae, sequi est. Magni possimus pariatur, mollitia commodi atque maiores, alias consectetur, doloribus ea delectus voluptas placeat eum optio aspernatur "
    }
]

server.get("/", (req, res)=>{
    // in parameter have a path and requestion response call back
    // request brwoser (client) to server response is from server to browser(client)
    
    res.json(jsonData)
    // you can respond anything within the () back to the server 


})

server.get("/content", (req, res)=>{
    res.json([
        {
        name:"Sachi",
        age:35,
        hobby:"walking"
        },
        {
        name:"Jackmo",
        age:33,
        hobby:"Tennis"
        }

    ])

})





server.get("/products", (req, res)=>{
    res.json(jsonData)
})

server.get("/products/:productID",(req, res)=>{
    res.send(jsonData.find(x=>x.id == req.params.productID))
})


server.get("/contact", (req, res)=>{
    res.json([
        {name:"contact us 1", description:"despcription1"},
        {name:"contact us 2", description:"description2"},
        {name:"contact us 3", description:"description 3"}

    ])
   
})





server.listen(4500, function(){
   console.log("hello");
});