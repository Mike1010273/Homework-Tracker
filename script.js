function addHomework(){
let subject = document.getElementById("subject").value;

let task = document.getElementById("task").value;

let date = document.getElementById("date").value;

let status = document.getElementById("statusInput").value;
let messageText = "";
if(status == "Complete"){
  messageText = "Great job! Homework completed!";
} 
  else {
messageText = "Keep going! Homework is still incomplete.";
  }
  document.getElementById("message").innerText = messageText;
  let historyItem = document.createElement("li");
 historyItem.innerText =
"Subject: " + subject +
" | Task: " + task +
" | Due Date: " + date +
" | Status: " + status;
document.getElementById("history").appendChild(historyItem);

}


