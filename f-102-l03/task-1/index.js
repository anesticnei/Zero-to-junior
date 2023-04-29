// const one = prompt("Ile godzin tygodniowo poświęcasz na naukę?")
// const two = prompt


// if(confirm ("Czy chcesz zostać junior fronted devem?")
//     String.fromCodePoint
// )

 

if (
    confirm(
      "Czy chcesz zostać junior frontend deweloperem?"
    )
  ){    
    alert("Ucz sie regularnie")
    let ileGodzin = prompt("Ile czasu tygodniowo poswiecasz na nauke?")
    if(ileGodzin > 10){
        alert("Dobra robota, lecisz jak burza")
    }else if(ileGodzin === 0){
        alert("a to coś robisz?")
    }else if(ileGodzin <= 3){
        alert("powoli do przodu/")
    }
}else{
      alert("to co tutaj robisz?")

  }



 

// if (
//     confirm(
//       "Czy chcesz zostać junior frontend deweloperem?"
//     )
//         ) {
//             alert("Ucz się regularnie");
//             let godziny = prompt(
//             "Ile czasu regularnie poświęcasz na naukę?"
//             );
//             if (godziny > 7) {
//             alert("Wow, lecisz jak burza!");
//             } else if (godziny == 0) {
//             alert("Oby to był tylko stan przejściowy!");
//             } else {
//             alert("Powoli do przodu");
//             }
//   } else {
//     alert("To co tutaj robisz?");
//   }