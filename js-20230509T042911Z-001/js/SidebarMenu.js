const showMenu = (toggleId , navbarId,bodyId) => {
    const toggle =document.getElementById(toggleId),
    navbar = document.getElementById(navbarId)
    bodypadding = document.getElementById(bodyId)
    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show')
            toggle.classList.toggle('rotate')
            bodypadding.classList.toggle('expander')
        })
    }
}

showMenu('nav-toggle', 'navbar' , 'body')

const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
    linkColor.forEach(l=>l.classList.remove('active'))
    this.classList.add('active')
}

const userLink = document.getElementById('user-link');
  const notificationLink = document.getElementById('notification-link');
  const favoritesLink = document.getElementById('favorites-link');
  const quanLiLink = document.getElementById('quan-li-link');
  const chatLink = document.getElementById('chat-link');

  const tableContainerUser = document.getElementById('table-container-user');
  const tableContainerNotification = document.getElementById('table-container-notification');
  const tableContainerFavorites = document.getElementById('table-container-favorites');
  const tableContainerQuanLi = document.getElementById('table-container-quan-li');
  const tableContainerChat = document.getElementById('table-container-chat');

  userLink.addEventListener('click', () => {
    tableContainerUser.style.display = 'block';
    tableContainerNotification.style.display = 'none';
    tableContainerFavorites.style.display = 'none';
    tableContainerQuanLi.style.display = 'none';
    tableContainerChat.style.display = 'none';
  });

  notificationLink.addEventListener('click', () => {
    tableContainerUser.style.display = 'none';
    tableContainerNotification.style.display = 'block';
    tableContainerFavorites.style.display = 'none';
    tableContainerQuanLi.style.display = 'none';
    tableContainerChat.style.display = 'none';
  });

  favoritesLink.addEventListener('click', () => {
    tableContainerUser.style.display = 'none';
    tableContainerNotification.style.display = 'none';
    tableContainerFavorites.style.display = 'block';
    tableContainerQuanLi.style.display = 'none';
    tableContainerChat.style.display = 'none';
  });

  quanLiLink.addEventListener('click', () => {
    tableContainerUser.style.display = 'none';
    tableContainerNotification.style.display = 'none';
    tableContainerFavorites.style.display = 'none';
    tableContainerQuanLi.style.display = 'block';
    tableContainerChat.style.display = 'none';
  });

  chatLink.addEventListener('click', () => {
    tableContainerUser.style.display = 'none';
    tableContainerNotification.style.display = 'none';
    tableContainerFavorites.style.display = 'none';
    tableContainerQuanLi.style.display = 'none';
    tableContainerChat.style.display = 'block';
  });

// đổi màu 
// Code to handle color change event
var checkbox_toggle = document.getElementById('light-dark');
checkbox_toggle.addEventListener('change', function(){
    // THêm class dark cho body
    document.body.classList.toggle('dark');
});


// Phân trang
// var currentPage = 1;
// var rowsPerPage = 5; // Số hàng hiển thị trên mỗi trang
// var table = document.querySelector('.table');
// var tableRows = table.getElementsByTagName('tr');
// var totalPages = Math.ceil(tableRows.length / rowsPerPage);

// function showPage(page) {
//   var startIndex = (page - 1) * rowsPerPage;
//   var endIndex = startIndex + rowsPerPage;
  
//   // Hiển thị các hàng tương ứng với trang hiện tại, ẩn các hàng còn lại
//   for (var i = 0; i < tableRows.length; i++) {
//     if (i >= startIndex && i < endIndex) {
//       tableRows[i].style.display = 'table-row';
//     } else {
//       tableRows[i].style.display = 'none';
//     }
//   }
  
//   // Cập nhật số trang
//   var pageNumbers = document.getElementById('page-numbers');
//   pageNumbers.innerHTML = '';
//   for (var j = 1; j <= totalPages; j++) {
//     var pageNumber = document.createElement('span');
//     pageNumber.textContent = j;
//     pageNumber.className = 'page-number';
//     if (j === page) {
//       pageNumber.classList.add('active');
//     }
//     pageNumber.setAttribute('onclick', 'goToPage(' + j + ')');
//     pageNumbers.appendChild(pageNumber);
//   }
// }

// function previousPage() {
//   if (currentPage > 1) {
//     currentPage--;
//     showPage(currentPage);
//   }
// }

// function nextPage() {
//   if (currentPage < totalPages) {
//     currentPage++;
//     showPage(currentPage);
//   }
// }

// function goToPage(page) {
//   currentPage = page;
//   showPage(currentPage);
// }

// // Hiển thị trang đầu tiên khi trang được tải
// showPage(currentPage);


// const pagination = document.querySelector('.pagination');
// const totalPages = 100;
// const visiblePages = 5;
// let currentPage = 2;

// const buttons = document.querySelectorAll('.pagination button');

// buttons.forEach(button => {
//   button.addEventListener('click', function() {
//     buttons.forEach(btn => {
//       btn.classList.remove('active');
//     });
//     this.classList.add('active');
//   });
// });

// function setActivePage(button) {
//   const activeButton = pagination.querySelector('.active');
//   if (activeButton) {
//     activeButton.classList.remove('active');
//   }
//   button.classList.add('active');
// }

// function generatePagination() {
//   pagination.innerHTML = ''; // Clear existing pagination links

//   // Add previous page button
//   const prevPage = document.createElement('button');
//   prevPage.innerHTML = '&laquo;';
//   pagination.appendChild(prevPage);

//   // Add page buttons
//   for (let i = 1; i <= totalPages; i++) {
//     if (i === currentPage) {
//       const activePage = document.createElement('button');
//       activePage.classList.add('active');
//       activePage.innerHTML = i;
//       pagination.appendChild(activePage);
//     } else if (
//       i === 1 || // Always show first page
//       i === totalPages || // Always show last page
//       (i >= currentPage - Math.floor(visiblePages / 2) && i <= currentPage + Math.floor(visiblePages / 2)) // Show current page with surrounding visible pages
//     ) {
//       const page = document.createElement('button');
//       page.innerHTML = i;
//       pagination.appendChild(page);
//     } else if (
//       i === currentPage - Math.floor(visiblePages / 2) - 1 ||
//       i === currentPage + Math.floor(visiblePages / 2) + 1
//     ) {
//       const ellipsis = document.createElement('span');
//       ellipsis.innerHTML = '...';
//       pagination.appendChild(ellipsis);
//     }
//   }

//   // Add next page button
//   const nextPage = document.createElement('button');
//   nextPage.innerHTML = '&raquo;';
//   pagination.appendChild(nextPage);
// }

// generatePagination();

// // Add event listeners for page navigation
// const pageButtons = pagination.querySelectorAll('button');
// pageButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     const targetPage = parseInt(event.target.innerHTML);
//     if (!isNaN(targetPage)) {
//       currentPage = targetPage;
//       generatePagination();
//       setActivePage(event.target);
//       // Do something else when a page is clicked, such as loading new content
//     } else if (event.target.innerHTML === '&laquo;') {
//       currentPage = Math.max(currentPage - 1, 1);
//       generatePagination();
//       setActivePage(event.target);
//       // Do something else when previous page is clicked
//     } else if (event.target.innerHTML === '&raquo;') {
//       currentPage = Math.min(currentPage + 1, totalPages);
//       generatePagination();
//       setActivePage(event.target);
//       // Do something else when next page is clicked
//     }
//   });
// });

// Lấy tất cả các nút bấm trong phân trang
var buttons = document.querySelectorAll('.pagination button');

// Thêm sự kiện click cho mỗi nút bấm
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Xóa lớp 'active' từ tất cả các nút bấm
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Thêm lớp 'active' vào nút bấm được nhấp vào
    button.classList.add('active');
  });
});

// Hàm đếm số trang từ 1 đến 100
function countPages() {
  var page = 1;
  while (page <= 100) {
    console.log(page); // Thay thế console.log bằng hành động mong muốn với số trang
    page++;
  }
}

// Gọi hàm đếm số trang
countPages();


var currentPage = 1; // Trang hiện tại
var totalPages = 100; // Tổng số trang
var maxButtons = 5; // Số lượng nút bấm phân trang hiển thị

// Lấy tất cả các nút bấm phân trang
var buttons = document.querySelectorAll('.pagination button');

// Thêm sự kiện click cho nút trang trước
document.getElementById('previous').addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

// Thêm sự kiện click cho nút trang tiếp theo
document.getElementById('next').addEventListener('click', function() {
    if (currentPage < totalPages) {
      if (currentPage === startPage + maxButtons - 2 && startPage + maxButtons - 1 <= totalPages) {
        startPage++;
      }
      currentPage++;
      updatePagination();
    }
  });
  
document.getElementById('next').addEventListener('click', function() {
    if (currentPage < totalPages) {
      if (currentPage === startPage + maxButtons - 2) {
        startPage++;
      }
      currentPage++;
      updatePagination();
    }
  });
// Thêm sự kiện click cho các nút trang
for (var i = 1; i <= totalPages; i++) {
  document.getElementById('page' + i).addEventListener('click', function() {
    var pageNumber = parseInt(this.innerHTML);
    if (pageNumber !== currentPage) {
      currentPage = pageNumber;
      updatePagination();
    }
  });
}

// Cập nhật trạng thái của nút phân trang
function updatePagination() {
  // Ẩn hiện nút trang trước và trang tiếp theo
  document.getElementById('previous').style.display = currentPage === 1 ? 'none' : 'inline-block';
  document.getElementById('next').style.display = currentPage === totalPages ? 'none' : 'inline-block';

  // Tính toán các nút trang hiển thị
  var middleButton = Math.ceil(maxButtons / 2);
  var startPage, endPage;

  if (totalPages <= maxButtons) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= middleButton) {
    startPage = 1;
    endPage = maxButtons - 1;
  } else if (currentPage >= totalPages - middleButton + 1) {
    startPage = totalPages - maxButtons + 2;
    endPage = totalPages;
  } else {
    startPage = currentPage - middleButton + 2;
    endPage = currentPage + middleButton - 2;
  }

  // Hiển thị các nút trang
  var buttonIndex = 1;
  for (var i = startPage; i <= endPage; i++) {
    document.getElementById('page' + buttonIndex).innerHTML = i;
    buttonIndex++;
  }

  // Ẩn hiện nút "..."
  document.getElementById('ellipsis').style.display = startPage > 1 ? 'inline-block' : 'none';

  // Cập nhật lớp active cho nút trang hiện tại
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });
  document.getElementById('page' + (middleButton + 1)).classList.add('active');
}

// Gọi hàm cập nhật phân trang ban đầu
updatePagination();




//ICON sửa xóa 
// Sử dụng JavaScript để thêm hành động khi click vào icon sửa và xóa
// const editIcons = document.getElementsByClassName('edit-icon');
// const deleteIcons = document.getElementsByClassName('delete-icon');

// for (let i = 0; i < editIcons.length; i++) {
//   editIcons[i].addEventListener('click', function() {
//     // Hành động sửa tại vị trí i
//     console.log('Edit action for row', i + 1);
//   });
// }

// for (let i = 0; i < deleteIcons.length; i++) {
//   deleteIcons[i].addEventListener('click', function() {
//     // Hành động xóa tại vị trí i
//     console.log('Delete action for row', i + 1);
//   });
// }


linkColor.forEach(l => l.addEventListener('click',colorLink))