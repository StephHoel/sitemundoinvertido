import { getHellfireClubSubscriptions, subscribeToHellfireClub } from './firebase/hellfire-clube.js';

const txtName           = document.getElementById('txtName');
const txtEmail          = document.getElementById('txtEmail');
const txtLevel          = document.getElementById('txtLevel');
const txtCharacter      = document.getElementById('txtCharacter');
const btnSubscribe      = document.getElementById('btnSubscribe');
const subscriptionsList = document.getElementById('subscriptions');

btnSubscribe.addEventListener('click', () =>{

   validation();

   if(txtName.value != '' && 
      (txtEmail.value != '' /* validação email */) && 
      (txtLevel.value != '' /* validação número */) && 
      txtCharacter.value != ''){
      
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

      document.getElementById('vSubscribe').className = "alert alert-success";
      document.getElementById('vSubscribe').textContent = "Inscrição efetuada com sucesso!";

      setTimeout(limpaAlerta, 10000);

      setTimeout(loadData, 10500);
      
   }
   });

async function loadData(){
   const subscriptions = await getHellfireClubSubscriptions();

   subscriptionsList.innerHTML = "<div class='alert alert-info center'><a href=lista.html>Acesse a lista completa aqui</a></div>"
   //subscriptions.map(sub => `<li> ${sub.Name} </li>`).join('');
   
   // console.log(subscriptions);
}

function validation(){
   if(txtName.value == ''){
      document.getElementById('vName').className = "alert alert-danger";
      document.getElementById('vName').textContent = "Nome deve ser preenchido";
   }
   else {
      document.getElementById('vName').textContent = "";
      document.getElementById('vName').className = "";
   }

   if(txtEmail.value == ''){
      document.getElementById('vEmail').className = "alert alert-danger";
      document.getElementById('vEmail').textContent = "E-mail deve ser preenchido";
   }
   else {
      document.getElementById('vEmail').textContent = "";
      document.getElementById('vEmail').className = "";
   }

   if(txtLevel.value == ''){
      
      document.getElementById('vLevel').className = "alert alert-danger";
      document.getElementById('vLevel').textContent = "Level deve ser preenchido";
   }
   else {
      document.getElementById('vLevel').textContent = "";
      document.getElementById('vLevel').className = "";
   }

   if(txtCharacter.value == ''){ 
      
         document.getElementById('vCharacter').className = "alert alert-danger";
      document.getElementById('vCharacter').textContent = "Personagem deve ser preenchido";
   }
   else {
      document.getElementById('vCharacter').textContent = "";
      document.getElementById('vCharacter').className = "";
   }
}

function limpaAlerta(){
   document.getElementById('vSubscribe').textContent = "";
   document.getElementById('vSubscribe').className = "";
}

loadData();