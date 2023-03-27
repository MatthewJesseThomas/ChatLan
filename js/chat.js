const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");

// Use WebRTC to establish a peer-to-peer connection with other users on the LAN
const peer = new SimplePeer();

peer.on("connect", () => {
  console.log("Connected to a peer on the LAN");
});

peer.on("data", (data) => {
  // Display incoming messages in the chat box
  const message = document.createElement("div");
  message.innerText = data;
  messagesDiv.appendChild(message);
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  // Send the message to the connected peer
  peer.send(message);
  // Clear the input field and display the message in the chat box
  messageInput.value = "";
  const sentMessage = document.createElement("div");
  sentMessage.innerText = message;
  messagesDiv.appendChild(sentMessage);
});
