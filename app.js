const messageForm = document.getElementById("message-form");
const messagesDiv = document.getElementById("messages");
let messagesData = [];

messageForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  
  if (username && message) {
    const messageData = {
      username: username,
      message: message,
      timestamp: new Date().toISOString()
    };
    
    messagesData.push(messageData);
    updateMessages();
    
    // Clear form fields
    document.getElementById("username").value = "";
    document.getElementById("message").value = "";
  }
});

function updateMessages() {
  messagesDiv.innerHTML = "";
  
  messagesData.forEach(messageData => {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${messageData.username}</strong> (${messageData.timestamp}):<br>${messageData.message}<hr>`;
    messagesDiv.appendChild(messageElement);
  });
}

// Fetch initial messages from JSON file (assuming messages.json)
fetch("messages.json")
  .then(response => response.json())
  .then(data => {
    messagesData = data.messages;
    updateMessages();
  });
