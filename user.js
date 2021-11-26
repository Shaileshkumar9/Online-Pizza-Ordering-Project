
function mult1(value)
        {
        var field1= value;
        

        var result=field1*159;
        
            document.getElementById("tot1").value=result;
    
        
        
    }
    function mult2(value)
        {
        var field1= value;
        

        var result=field1*200;
        
            document.getElementById("tot2").value=result;
    
        
        
    }
    function mult3(value)
        {
        var field1= value;
        

        var result=field1*99;
        
            document.getElementById("tot3").value=result;
        
        
    }
    function mult4(value)
        {
        var field1= value;
        

        var result=field1*150;
        
            document.getElementById("tot4").value=result;
        
        
    }
    function totalcalc()
    {
        var x=document.getElementById("tot1").value;
        var y=document.getElementById("tot2").value;
        var z=document.getElementById("tot3").value;
        var z1=document.getElementById("tot4").value;
       
        var t=parseFloat(x)+ parseFloat(y)+parseFloat(z)+ parseFloat(z1);
        document.getElementById("htot").value=t;

    }
    function placeorder()
    { 
        
       
        var q=10;
        
         localStorage.setItem("ti",q);
         
         
         return;
         
         
        
         
        
        
        
      
      
        
    }
    var selectedrow=null;
   
    
    function onformsubmit()
    {
        var formdata=readformdata();
        insertdata(formdata);
        resetform();

    }
    function readformdata()
    {
        var formdata={};
        formdata["chk1"]=document.getElementById("chk1").value;
        formdata["pizza01"]=document.getElementById("pizza01").value;
        formdata["price"]=document.getElementById("price").value;
        formdata["tot1"]=document.getElementById("tot1").value;
        return formdata;
    }
    function insertdata(data)
    {
        var table=document.getElementById("orderlist").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        cell1=newRow.insertCell(0);
        cell1.innerHTML=data.chk1;
        cell2=newRow.insertCell(1);
        cell2.innerHTML=data.pizza01;
        cell3=newRow.insertCell(2);
        cell3.innerHTML=data.price;
        cell4=newRow.insertCell(3);
        cell4.innerHTML=data.tot1;
        cell4=newRow.insertCell(4);
        cell4.innerHTML = `
                        <a onClick="ondelete(this)">Delete</a>`;

        
       
                         

    }
    function resetform()
    {
        document.getElementById('pizza01').value="";
        selectedrow=null;
    
    }
    
    
    function ondelete(td)
    {
        if(confirm('Are you sure to delete'))
        {
        row=td.parentElement.parentElement;
        document.getElementById("orderlist").deleteRow(row.rowIndex);
        resetform();
        }
    }
    function onformsubmit3()
    {
        var formdata3=readformdata3();
        insertdata3(formdata3);
        resetform3();

    }
    function readformdata3()
    {
        var formdata3={};
        formdata3["chk3"]=document.getElementById("chk3").value;
        formdata3["pizza03"]=document.getElementById("pizza03").value;
        formdata3["price3"]=document.getElementById("price3").value;
        formdata3["tot3"]=document.getElementById("tot3").value;
        return formdata3;
    }
    function insertdata3(data)
    {
        var table=document.getElementById("orderlist").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        cell1=newRow.insertCell(0);
        cell1.innerHTML=data.chk3;
        cell2=newRow.insertCell(1);
        cell2.innerHTML=data.pizza03;
        cell3=newRow.insertCell(2);
        cell3.innerHTML=data.price3;
        cell4=newRow.insertCell(3);
        cell4.innerHTML=data.tot3;
        cell4=newRow.insertCell(4);
        cell4.innerHTML = `
                        <a onClick="ondelete3(this)">Delete</a>`;

        
       
                         

    }
    function resetform3()
    {
        document.getElementById('pizza03').value="";
        selectedrow=null;
    
    }
    
    
    function ondelete3(td)
    {
        if(confirm('Are you sure to delete'))
        {
        row=td.parentElement.parentElement;
        document.getElementById("orderlist").deleteRow(row.rowIndex);
        resetform3();
        }
    }
    function onformsubmit2()
    {
        var formdata2=readformdata2();
        insertdata2(formdata2);
        resetform2();

    }
    function readformdata2()
    {
        var formdata2={};
        formdata2["chk2"]=document.getElementById("chk2").value;
        formdata2["pizza02"]=document.getElementById("pizza02").value;
        formdata2["price2"]=document.getElementById("price2").value;
        formdata2["tot2"]=document.getElementById("tot2").value;
        return formdata2;
    }
    function insertdata2(data)
    {
        var table=document.getElementById("orderlist").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        cell1=newRow.insertCell(0);
        cell1.innerHTML=data.chk2;
        cell2=newRow.insertCell(1);
        cell2.innerHTML=data.pizza02;
        cell3=newRow.insertCell(2);
        cell3.innerHTML=data.price2;
        cell4=newRow.insertCell(3);
        cell4.innerHTML=data.tot2;
        cell4=newRow.insertCell(4);
        cell4.innerHTML = `
                        <a onClick="ondelete2(this)">Delete</a>`;

        
       
                         

    }
    function resetform2()
    {
        document.getElementById('pizza02').value="";
        selectedrow=null;
    
    }
    
    
    function ondelete2(td)
    {
        if(confirm('Are you sure to delete'))
        {
        row=td.parentElement.parentElement;
        document.getElementById("orderlist").deleteRow(row.rowIndex);
        resetform2();
        }
    }
    function onformsubmit4()
    {
        var formdata4=readformdata4();
        insertdata4(formdata4);
        resetform4();

    }
    function readformdata4()
    {
        var formdata4={};
        formdata4["chk4"]=document.getElementById("chk4").value;
        formdata4["pizza04"]=document.getElementById("pizza04").value;
        formdata4["price4"]=document.getElementById("price4").value;
        formdata4["tot4"]=document.getElementById("tot4").value;
        return formdata4;
    }
    function insertdata4(data)
    {
        var table=document.getElementById("orderlist").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        cell1=newRow.insertCell(0);
        cell1.innerHTML=data.chk4;
        cell2=newRow.insertCell(1);
        cell2.innerHTML=data.pizza04;
        cell3=newRow.insertCell(2);
        cell3.innerHTML=data.price4;
        cell4=newRow.insertCell(3);
        cell4.innerHTML=data.tot4;
        cell4=newRow.insertCell(4);
        cell4.innerHTML = `
                        <a onClick="ondelete4(this)">Delete</a>`;

        
       
                         

    }
    function resetform4()
    {
        document.getElementById('pizza04').value="";
        selectedrow=null;
    
    }
    
    
    function ondelete4(td)
    {
        if(confirm('Are you sure to delete'))
        {
        row=td.parentElement.parentElement;
        document.getElementById("orderlist").deleteRow(row.rowIndex);
        resetform2();
        }
    }
    function nameo(value)
    {
        var g=value;
        document.getElementById("names").innerHTML=g;
        document.getElementById("names").style.color="white";
        
        
               
    }
    function phoneo(value)
    {
        var j=value;
        document.getElementById("phones").innerHTML=j;
        document.getElementById("phones").style.color="white";

    }
    


    function addpizza()
    {
        var name1= document.getElementById('pronumber').value;
        var name2= document.getElementById('proname').value;
        var name3= document.getElementById('dec').value;
        var name4= document.getElementById('price').value;
        sessionStorage.setItem("value1",name1);
        sessionStorage.setItem("value2",name2);
        sessionStorage.setItem("value3",name3);
        sessionStorage.setItem("value4",name4);
        resetform();
       
        
        window.location.href="User.html";
        
        
        

        
    }
    function resetform()
{
    document.getElementById('pronumber').value="";
    document.getElementById('proname').value="";
    document.getElementById('dec').value="";
    document.getElementById('price').value="";
    selectedrow=null;

}
if(sessionStorage.getItem("value1")==null)
{
    document.getElementById("addd").style.opacity="0";
}
if(sessionStorage.getItem("value1")!=null)
{
    document.getElementById("addd").style.backgroundColor="yellow";
    document.getElementById("addd").style.padding="10px";


}
    
    
    function ss()
    {
        var o1=sessionStorage.getItem("value1");
        var o2=sessionStorage.getItem("value2");
        var o3=sessionStorage.getItem("value3");
        var o4=sessionStorage.getItem("value4");
        
    
        var formdataw=readformdataw();
        insertdataw(formdataw);
        

    
    function readformdataw()
    {
        var formdataw={};
        formdataw["chka"]=o1;
        formdataw["pizza0a"]=o2;
        
        formdataw["pricea"]=o3;
        formdataw["tota"]=o4;
        return formdataw;
    }
    function insertdataw(data)
    {
        var table=document.getElementById("kalu").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        cell1=newRow.insertCell(0);
        cell1.style.backgroundImage="url('https://www.oetker.in/Recipe/Recipes/oetker.in/in-en/pizza/image-thumb__52711__RecipeDetailsLightBox/pizza-pollo-arrosto.jpg')";
        cell1.style.backgroundPosition="center";
        cell1.style.backgroundSize="cover";
        cell1.style.width="200px";
        cell1.style.height="160px";
        cell2=newRow.insertCell(1);
        cell2.innerHTML=data.pizza0a;
        cell3=newRow.insertCell(2);
        cell3.innerHTML=data.tota;
        cell4=newRow.insertCell(3);
        cell4.innerHTML=data.pricea;
        cell5=newRow.insertCell(4);
        cell5=innerHTML=data.pricea;
        cell6=newRow.insertCell(5);
        cell6.innerHTML = `
                          <a onClick="" style="background-color:"red";>ADD</a>`;
                        
                       

        
       
                         

    }
    document.getElementById("addd").style.display="none";
   
    
    }

