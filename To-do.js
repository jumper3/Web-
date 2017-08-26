//给li后面加上关闭按钮

function closeBtn() {
    var mylist = document.getElementsByTagName("li");
    for (i = 0; i < mylist.length; i++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7"); 
      span.className = "close";
      span.appendChild(txt);
      mylist[i].appendChild(span);
    }
  }

//点击关闭按钮清除一项

function closeElement(){
    var close=document.getElementsByClassName("close");
    for (i=0;i<close.length;i++){
        close[i].onclick=function(){
            var parent=this.parentElement;
            parent.style.display="none";
        }
    }
}

//给li加入修改按钮
function setBtn(){
    var mylist = document.getElementsByTagName("li");
    for (i = 0; i < mylist.length; i++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u2606"); 
      span.className = "set";
      span.appendChild(txt);
      mylist[i].appendChild(span);
    }
}


function ifChecked() {
    var list = document.querySelector('ul');
    list.onclick = function(event) {
      if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');//反转css类的有无
      }
    }
  }


//点击添加，则创建一个新的li


function newElement(){
    var li=document.createElement("li");
    var input=document.getElementById("myInput").value;
    var t=document.createTextNode(input);
    li.appendChild(t);
    if (input === ''){
        alert("请输入待办事项");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value="";
}



//初始化函数集

//初始化列表
function initList(){
    closeBtn();
    closeElement();
    setBtn();
    ifChecked();
}


window.onload=function(){
    initList();
    var addBt=document.getElementById("addButton");
    //点击添加按钮时执行以下函数
    addBt.onclick=function(){
        newElement();
        initList();
    }
}






