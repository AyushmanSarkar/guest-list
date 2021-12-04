guest_names_array=[]
var guest_name=document.getElementById("textInput").value

function submitName(){
    const includes = guest_names_array.includes(document.getElementById("textInput").value);
    console.log(includes);
    if (includes==true){
        window.alert("Name exists already");
        guest_names_array.remove(document.getElementById("textInput").value);
    }
if (document.getElementById("textInput").value!=""){
    guest_names_array.push(document.getElementById("textInput").value);
    console.log(guest_names_array);
}else if (document.getElementById("textInput").value==""){
    window.alert("Write the name first");
}
document.getElementById("Unsorted List").innerHTML=guest_names_array;
}

function showList(){
    var len=guest_names_array.length_of_array
    var i = 0
    document.getElementById("Ordered List").innerHTML=guest_names_array.join("<br>");
        console.log("success");
}

function sortList(){
    guest_names_array_sort=guest_names_array.sort()
    console.log(guest_names_array_sort);
    document.getElementById("Sort Ordered List").innerHTML=guest_names_array_sort.join("<br>");
}
    
function searchItem(){
    var value = document.getElementById("search-txt").value
    const search = guest_names_array.includes(value);
    console.log(search)

    if(search==true){
        document.getElementById("search_result").innerHTML="Name exists 1 time"
    } else if (search==false){
        document.getElementById("search_result").innerHTML="Name exists 0 times"
    } 
    if(document.getElementById("search-txt").value==""){
        window.alert("Write what you want to search first");
        document.getElementById("search_result").innerHTML="Search results are displayed here"
    }

}