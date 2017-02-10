function valida(f) {
			  var ok = false;
			  var ok2= false;
			  
			  var nom = f.elements[0].value;
			  var mail2 = f.elements["correo"].value;
			  if(/^[a-zA-Z\-]{2,30}$/.test(nom)){
			  	ok=true;
			  }

			  if (/^[A-Za-z][A-Za-z0-9.-_]{3,20}@[a-z.]{3,20}[a-z0-9]{2,4}$/.test(mail2)){
			   		ok2=true;
			  } 


				//	/^[a-zA-Z]([\.-_]?\w){2,50}@\w+([\.-]?\w){2,50}(\.\w{2,3,4})$/
			
			  
			  if(ok== true){
			  	if(ok2==true){
			  	 return true;
			  	}else{
			  		alert("El email es incorrecto.");
					return false;

			  	}

			  }else{
			    alert("El nombre es incorrecto.");
				return false;
			}
			
			
		}