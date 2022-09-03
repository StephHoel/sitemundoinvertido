import { getHellfireClubSubscriptions } from './firebase/hellfire-clube.js';

const table = document.getElementById("divTableBody");

async function loadData(){
   const subscriptions = await getHellfireClubSubscriptions();
   let html = "";
   
   subscriptions.map(sub => {
      html += "<div class=divTableRow>";

         html += "<div class=divTableCell>";
         html += sub.Name;
         html += "</div>";
      
         html += "<div class=divTableCell>";
         html += sub.Email;
         html += "</div>";
      
         html += "<div class=divTableCell>";
         html += sub.Level;
         html += "</div>";
      
         html += "<div class=divTableCell>";
         html += sub.Character;
         html += "</div>";
      
      html += "</div>";
   }).join('');

   table.insertAdjacentHTML('afterend', html);
}

loadData();