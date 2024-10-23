//setting up express app
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Blog = require("./models/blog.js")

//connect to mongodb
const dbURI = "mongodb+srv://nodeuser:node123@nodetutorial.8n73q.mongodb.net/node-tutorial?retryWrites=true&w=majority&appName=nodetutorial"
mongoose.connect(dbURI)
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));

//setting view engine as ejs 
app.set("view engine","ejs")
app.use(express.urlencoded())

//setting the port number
// app.listen(3000);

//mongoose and mongo sandbox clients
app.get("/add-blog",(req,res)=>{
    const blog  = new Blog({
        title: "My First blog",
        snippet: "About my new blog",
        body: "More about my blog"
    });

    blog.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get("/all-blogs",(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    });
})

//middleware and static files
//this is the one which specifies the web to use css
app.use(express.static("public"))

//routing
app.get("/",(req,res)=>{
  res.redirect("/blogs")
})

app.get('/blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render("index",{title:"All Blogs", blogs:result})
    })
    .catch((err)=>{
        comsole.log(err)
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{title: "About"});
})

//redirects
app.get("/create",(req,res)=>{
    res.render("create",{title:"Create a new Blog"})
})

//POST requests
app.post("/blogs",(req,res)=>{
    const blog = new Blog( (req.body))
    blog.save()
    .then(()=>{
        res.redirect("/blogs")
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get("/blogs/:id",(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render("details",{blog:result,title:"Blog Details"})
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.delete("/blogs/:id",(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({ redirect: "/blogs" }); // because this is happening in the window object and get sends ajax AJAX
    })
    .catch((err)=>{
        console.log(err)
    })
})
//404
//this will fire if none of the above are fired
app.use((req,res)=>{
    res.status(404).render("404",{title:"404"})
})


// before ejs

// //routing
// app.get("/",(req,res)=>{
//     res.sendFile("./views/index.html",{root:__dirname})
// })

// app.get("/about",(req,res)=>{
//     res.sendFile("./views/about.html",{root:__dirname})
// })

// //redirects
// app.get("/about_me",(req,res)=>{
//     res.redirect("/about");
// })

// //404
// //this will fire if none of the above are fired
// app.use((req,res)=>{
//     res.status(404).sendFile("./views/404.html",{root:__dirname})
// })