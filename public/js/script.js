document.addEventListener("DOMContentLoaded", (event) => {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
    });


    document.querySelector(".third").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });

      document.querySelector(".third1").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });


      document.querySelector(".third2").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });
      
      document.querySelector(".third3").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });

      document.querySelector(".third4").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });

      document.querySelector(".third5").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });

      document.querySelector(".third6").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });

      document.querySelector(".third7").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });

      document.querySelector(".third8").addEventListener("click", function() {
        Swal.fire({
          title: "Menghapus Data Mobil",
          text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
          imageWidth: 400,
          imageHeight: 225,
          imageAlt: "Eagle Image",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#DC3545",
          cancelButtonColor: "#0D28A6",
          reverseButtons: true,
          showCancelButton: true,
          
        });
      });


      

      
    