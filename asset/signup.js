var check = function() {
    if (document.getElementById('password_validate').value ==
      document.getElementById('cpassword_validate').value) {
      document.getElementById('pas_message').style.color = 'green';
      document.getElementById('pas_message').innerHTML = '';
    } else {
       document.getElementById('pas_message').style.color = 'red';
       document.getElementById('pas_message').innerHTML = 'Password not matching';
      }
}

function fileValidation_profile()
{
    const fileInput =  document.getElementById('file_profile'); 
              
     var filePath = fileInput.value; 
     var allowedExtensions =   /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
              
            if (!allowedExtensions.exec(filePath)) { 
                alert('File shold be in .jpg, .jpeg, .png fromats '); 
                fileInput.value = ''; 
                return false;
            }
            else
            {
                if (fileInput.files.length > 0) 
                { 
                  for (const i = 0; i <= fileInput.files.length - 1; i++) 
                  {
                    const fsize = fileInput.files.item(i).size; 
                    const file = Math.round((fsize / 1024)); 
                    if (file >= 2048)
                     { 
                        fileInput.value = '';
                        alert( "File too Big, please select a file less than 2mb"); 
                    }

                  }
                }


            }

}


function fileValidation_dis()
{
    const fileInput =  document.getElementById('file_dis'); 
              
     var filePath = fileInput.value; 
     var allowedExtensions =   /(\.jpg|\.jpeg|\.png|\.doc|\.pdf|\.docx|\.ppt)$/i; 
              
            if (!allowedExtensions.exec(filePath)) { 
                alert('File shold be in .jpg, .jpeg, .png, .doc, .pdf, .docx fromats '); 
                fileInput.value = ''; 
                return false;
            }
            else
            {
                if (fileInput.files.length > 0) 
                { 
                  for (const i = 0; i <= fileInput.files.length - 1; i++) 
                  {
                    const fsize = fileInput.files.item(i).size; 
                    const file = Math.round((fsize / 1024)); 
                    if (file >= 2048)
                     { 
                        fileInput.value = '';
                        alert( "File too Big, please select a file less than 2mb"); 
                    }

                  }
                }


            }

}
var modal = document.getElementById('id001');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}