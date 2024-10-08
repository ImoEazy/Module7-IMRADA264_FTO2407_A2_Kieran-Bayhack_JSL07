document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage') ;
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Go back to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields'); 
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
       <h2>Certifiacate of excellence</h2>
       <p> achievment by</p>
       <h3>${studentName}</h3>
       <p> indicating course completion</p>
       <p>${personalMessage}</p> 
       <h4>${courseName}</h4>
       <img src="./logo.png" alt=" " style="margin-top: 15px; max-height: 100px;">
      
          
     `;
     // img src="./logo.png">//
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click' , function () {
      modal.style.display = 'none';
    });
      
    });
  
  