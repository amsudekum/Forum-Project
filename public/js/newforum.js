// const newFormHandler = async (event) => {
//     event.preventDefault();

//     const content = document.querySelector('#content').value.trim();
    
  
//     if (topic && content) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ content}),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };
  
  
//   document
//     .querySelector('.create-form')
//     .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);