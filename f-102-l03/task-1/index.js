if (
    confirm(
      "Czy chcesz zostać junior frontend deweloperem?"
    )
  ){    
    alert("Ucz sie regularnie")
    let ileGodzin = prompt("Ile czasu tygodniowo poswiecasz na nauke?")
    if(ileGodzin >= 10){
        alert("Dobra robota, lecisz jak burza")
    }else if(ileGodzin === 0){
        alert("a to coś robisz?")
    }else if(ileGodzin <= 3){
        alert("powoli do przodu")
    }
}else{
      alert("to co tutaj robisz?")

  }