const body=document.querySelector("body")
const p=document.createElement("p")
const p2=p.cloneNode()

fetch("http://localhost:3000/posts")
.then(response=>response.json())
.then(data=>{
    p.textContent=JSON.stringify(data)
})
.catch(error=>console.log(error))


fetch("http://localhost:3000/comments")
.then(response=>response.json())
.then(data=>{

  p2.textContent=JSON.stringify(data)

})
.catch(error=>console.log(error))

body.append(p,p2)