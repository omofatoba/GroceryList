let input=document.querySelector("#input");
let save=document.querySelector(".save");
 let listHolder=document.querySelector(".listHolder");

 save.addEventListener("click",function (params) {
   let input_value=input.value;

   if (input_value.length ===0) {
    alert("Input Must Not Be Empty")
   }else{
 input.value="";
    let increase=1;

    let all=document.querySelectorAll(".list");
        if (all.length===0) {
            
        }else{
          let lastList=all[all.length -1];
         let num_last=lastList.querySelector(".num");
                increase=Number(num_last.innerHTML) +1
        }



  let list=document.createElement("div");
  list.className="list";
  list.id="line"+increase;

  let num=document.createElement("p");
  num.className="num";
  num.innerHTML=increase;
//content
  let content=document.createElement("p");
  content.className="content";
  content.innerHTML=input_value;

  //delete and edit button;
  let del=document.createElement("p");
  del.className="del";
  del.innerHTML="Delete";

  let edit=document.createElement("p");
  edit.className="edit";
  edit.innerHTML="edit";

  list.append(num,content,del,edit)
  listHolder.append(list)
   }

  utility("An Item Has Been Added Successfully",'lib')

  deleteRow()
edit()

});



function deleteRow(params) {

  if (document.querySelectorAll(".del")[0] !==null) {
      let del=document.querySelectorAll(".del");

      del.forEach(function(ele) {
        ele.addEventListener("click",function() {
        ele.parentElement.remove();

      
            utility("An Item Has Been Deleted",'red')

        reset()
        })
      })
  }
}

function reset(params) {
    
  let nums=document.querySelectorAll(".num");
  nums.forEach(function(val,index) {
    val.innerHTML=(index+1);
  })
   
} 


function edit(params) {
  let edits=document.querySelectorAll(".edit");
 
  edits.forEach(function(ele) {
  ele.addEventListener("click",function() {
    let parentEle=ele.parentElement;
      let pId=parentEle.id;


   let cont= parentEle.querySelector(".content");

  input.value=cont.innerHTML;

  input.focus();
  document.querySelector(".chn").style.display="inline";
  document.querySelector(".save").style.display="none";
document.querySelector(".chn").setAttribute("tyd",pId)
  changes()
  })
  })

}



function changes(params) {
  let chn=  document.querySelector(".chn");
  chn.addEventListener("click",function() {
    let newVal=input.value;
  
  
    let id=chn.getAttribute("tyd");
    

    let np=document.querySelector("#"+id)
   let cont=np.querySelector(".content");
   cont.innerHTML=newVal;

   this.style.display="none";
  document.querySelector(".save").style.display="inline";

     input.value="";
    
let text=id+" Item Has Been Edited";
     utility(text,"green")
  })
}


function utility(text,bg) {
  let mess=document.querySelector(".message");
  mess.classList.add("gen")
  mess.innerHTML=text;

 mess.classList.add(bg)
 

setTimeout(() => {
mess.classList.remove(bg);
mess.classList.remove("gen");
 mess.innerHTML=""
 
}, 7000)
}