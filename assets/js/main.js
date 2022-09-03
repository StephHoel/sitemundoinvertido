import { getHellfireClubSubscriptions, subscribeToHellfireClub } from './firebase/hellfire-clube.js';

const txtName           = document.getElementById('txtName');
const txtEmail          = document.getElementById('txtEmail');
const txtLevel          = document.getElementById('txtLevel');
const txtCharacter      = document.getElementById('txtCharacter');
const btnSubscribe      = document.getElementById('btnSubscribe');
const subscriptionsList = document.getElementById('subscriptions');

btnSubscribe.addEventListener('click', () => {
   const subscription = {
      Name:      txtName.value,
      Email:     txtEmail.value,
      Level:     txtLevel.value,
      Character: txtCharacter.value
   };

   // Salvando no Banco de Dados
   const subscriptId = subscribeToHellfireClub(subscription);
   // console.log('Inscrito com sucesso: ' + subscriptId);

   txtName.value      = '';
   txtEmail.value     = '';
   txtLevel.value     = '';
   txtCharacter.value = '';
});

async function loadData(){
   const subscriptions = await getHellfireClubSubscriptions();

   subscriptionsList.innerHTML = subscriptions.map(sub => limpaMap(sub.Name)).join('');
   
   // console.log(subscriptions);
}

function limpaMap(subs){
   if (subs != ''){
      return `<li> ${subs} </li>`;
   }
}

loadData();