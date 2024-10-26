
const num=Math.floor(Math.random()*100)+1

let chance=0


function result()
{
   const number=Number(document.getElementById("input").value);
   const Guessprinting=document.getElementById("guess")
   const printing1=document.getElementById("low")
   const chancedisplay=document.getElementById("p2")
   const result=document.getElementById("result")

   

     Guessprinting.textContent=`${Guessprinting.textContent} ${number}`
   
    if(num==number)
    {
        printing1.textContent="Number is Correct"
        document.getElementById("butt").disabled=true;
        printing1.style.backgroundColor="Green"
        printing1.style.Color="white"
        printing1.style.textAlign = "center"; // Center the text within the element
        printing1.style.padding = "10px"; // Add padding for a better look
        printing1.style.borderRadius = "5px"; // Add rounded corners
        printing1.style.width = "fit-content"; // Center the box width to fit the text
        printing1.style.margin = "10px auto";
        return;



    }

    else if (num < number) {

     printing1.textContent = "Too High! Try Again.";
     printing1.style.width="55px"
     printing1.style.height="55px"
     printing1.style.color="white"
     printing1.style.backgroundColor="red"
     printing1.style.textAlign = "center"; // Center the text within the element
      printing1.style.padding = "5px"; // Add padding for a better look
      printing1.style.borderRadius = "5px"; // Add rounded corners
      printing1.style.width = "fit-content"; // Center the box width to fit the text
      printing1.style.margin = "10px auto";


     } 
 else {
     printing1.textContent = "Too Low! Try Again.";
     printing1.style.backgroundColor="red"
     printing1.style.width="55px"
     printing1.style.height="55px"
     printing1.style.color="white"
     printing1.style.padding = "10px"; // Add padding for a better look
     printing1.style.borderRadius = "5px"; // Add rounded corners
     printing1.style.width = "fit-content"; // Center the box width to fit the text
     printing1.style.margin = "10px auto";

 }
   chance++;

   result.textContent=`Chances Used: ${chance}/10`;

   if(chance==10)
   {
     printing1.textContent=`Game over! The correct number was ${num}.`;
     document.getElementById("butt").disabled=true;
   }
}

document.getElementById("butt").addEventListener("click", result);


