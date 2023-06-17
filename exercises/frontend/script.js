// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  const getData = async () => {
    const data = await apiFetch('http://localhost:8080/contacts');
    displayAllData(data);
  };
  
  function displayAllData(data) {
    let div=document.querySelector('.contacts');
    data.forEach(contact => {
      const p = document.createElement("p");
      const a = document.createElement("a");
      var link = document.createTextNode(contact.firstName);
      a.appendChild(link); 
      a.href= `http://localhost:8080/contacts/${contact._id}`;
      p.appendChild(a);
      div.appendChild(p);

      
    });
  

  }
  function displayContactDetails(){
    let div=document.querySelector('.contactDetails');
    data.forEach(contact => {
      const p = document.createElement("p");
      var para = document.createTextNode(contact.firstName);
      p.appendChild(para); 
      div.appendChild(p);

      
    });

  }




  
  function firstName(n) {
    let element = document.getElementById('fristname');
    element.innerHTML = n;
  }
  function lastName(n) {
    let element = document.getElementById('lasttname');
    element.innerHTML = n;
  }
  function emailId(n) {
    let element = document.getElementById('email');
    element.innerHTML = n;
  }


  function htmlTemplate(contact){
    let item=`
    <p>${contact}</p>
    `;

    document.querySelector('.contacts').appendChild(item);
  }

  
  getData();