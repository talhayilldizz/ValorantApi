$.ajax({
    url: "https://valorant-api.com/v1/agents",
    type: "GET",
    success: function (agents) {
        const agentsArray = agents.data;
        agentsArray.forEach(agentsObject => {
            getagentsData(agentsObject)
        });
    }
  });
  const list=document.getElementById("list");
  const generalCard = document.querySelector(".general-card");
  function getagentsData(agentsObject) {
        const agentsid = agentsObject.uuid;
        const agentsName = agentsObject.displayName;
        const agentsIcon = agentsObject.displayIcon;
     createagents(agentsName,agentsIcon,agentsid);
    }


    
    function createagents(name,icon,id) {
      console.log(name,icon,id);
      console.log(list);
      card.innerHTML+=`<div class="col-2 mt-5 mb-1" style="color:white" id="${id}"><img style="width:auto;height:70px; margin: 0 auto;" src="${icon}"><h3 style=" style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; "><span style="style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;" id='name-${id}'>${name}</span></h3> </img><div id="action"> <button onclick="Remove('${id}')" id="delete-${id}" class="btn btn-sm btn-danger"><img src="trash-bin.png" style="width:20px;"> </button>
      <button class="btn btn-sm btn-warning"   onclick="gizleGoster('${id}')" id="update-${id}"><img src="file.png" style="width:20px;  " > </button>
      <button class="btn btn-sm btn-success"  style="display:none;" onclick="update('${id}')" id="save-${id}"><img src="file.png" style="width:20px;  " > </button>
        <input class="mt-2" type="text" id="edit-${id}"  style="border-radius:3px; border:0px;display:none; "> </div></div>  `
    }




    function Remove(id) {
      let item = document.getElementById(id);
      item.remove();
    }




    function update(id) {
        let change = document.getElementById(`edit-${id}`).value;
        console.log(change);
        const name=document.getElementById(`name-${id}`)
        name.innerText=`${change}`;

        const upButton =$(`#update-${id}`);
        const editInput=document.getElementById(`edit-${id}`);
        const saveButton=$(`#save-${id}`);
        editInput.removeAttribute("style");
        editInput.setAttribute("style","display:none");
        saveButton.hide();
        upButton.show();
        update.show();
    }  




    function gizleGoster(id) {
      var x = document.getElementById(`edit-${id}`).value;
      const editInput=document.getElementById(`edit-${id}`)
      editInput.removeAttribute("style");
      editInput.setAttribute("style","display:block")
      const saveButton=$(`#save-${id}`);
      saveButton.show();
      const updateButton=$(`#update-${id}`)
      updateButton.hide();
    } 