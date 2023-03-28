
//   const topicLinks = document.querySelectorAll('.topic');

// topicLinks.forEach((link) => {
//   link.addEventListener('click', async (event) => {
//     event.preventDefault();

//     const href = link.getAttribute('href');
//     const response = await fetch(`/api/Forumpost${href}`);

//     if (response.ok) {
//       const html = await response.text();
//       document.getElementById('content-container').innerHTML = html;
//     } else {
//       alert('Failed to load content');
//     }
//   });
// });
