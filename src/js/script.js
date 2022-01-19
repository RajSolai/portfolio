let messageBox = document.getElementById("messageBox");
const apiUrl =
  "https://eu-gb.functions.appdomain.cloud/api/v1/web/msraj085%40gmail.com_dev/default/portfolio_feedback";

function sayHello() {
  const message = {
    time: new Date(),
    value: messageBox.value,
  };
  axios.post(apiUrl, { feedback: message }).then((data) => {
    console.log(data);
    console.log("thanks for the feedback");
  });
}
