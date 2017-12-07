// // $(document).ready( () => {
// //   $('.submit-btn').click(() =>{
// //     $('.schedule-link').css("visibility", "visible");
// //   });
// // });
//
// <%if(typeof errorMessage=== "") {%>
//   <p>
//   <%=errorMessage%>
//   </p>
// <%}%>

$('.submit-btn').click( () => {
  if(errorMessage) {
    alert("wrong");
  }
});
