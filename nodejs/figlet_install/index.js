import figlet from "figlet";

async function printmyname() {
  const text = await figlet.text("Hello Srividhya!");
  console.log(text);
}

printmyname();