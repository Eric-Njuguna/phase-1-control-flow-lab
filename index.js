function scuberGreetingForFeet(distance) {
  // Write your code here!

  let message;
  if (distance <= 400) {
    message = `This one is on me!`;
  } else if (distance > 400 && distance <= 2000) {
    message = `That will be twenty bucks.`;
  } else if (distance > 2000 && distance <= 2500) {
    message = `I will gladly take your thirty bucks.`;
  } else {
    message = `No can do.`;
  }
  return message;
}

function ternaryCheckCity(city) {
  // Write your code here!
  const response1 = `Ok, sounds good.`;
  const response2 = `No go.`;
  return city === 'NYC' ? response1 : response2;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let response;

  switch (tip) {
    case `generous`:
      response = `Thank you so much.`;
      break;

    case `not as generous`:
      response = `Thank you.`;
      break;

    default:
      response = `Bye.`;
      break;
  }
  return response;
}

console.log(switchOnCharmFromTip(`no as generous`));