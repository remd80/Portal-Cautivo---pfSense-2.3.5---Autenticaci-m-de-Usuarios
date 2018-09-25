	window.onload = function() {
		var borrar = document.getElementById('borrar');
		borrar.addEventListener("click", borrarTodo);
		
		var nombre = document.getElementById('usuario');
		nombre.addEventListener("input", campoNombre);
		
		var clave = document.getElementById('clave');
		clave.addEventListener("input", campoClave);
	}

	function borrarTodo() {
		document.location.reload(true);
	}

	function campoNombre() {
		var usuarioNombre = document.getElementById('usuario').value;
		var usuarioError = document.getElementById('nombre_error');
		var usuarioCampo = document.getElementById('usuario');
		
		if (usuarioNombre) {
			usuarioError.innerHTML = " ";
			usuarioCampo.style.outline = "1px solid transparent";
		}
	}

	function campoClave() {
		var usuarioClave = document.getElementById('clave').value;
		var claveError = document.getElementById('clave_error');
		var claveCampo = document.getElementById('clave');
		
		if (usuarioClave) {
			claveError.innerHTML = " ";
			claveCampo.style.outline = "1px solid transparent";
		}
	} 

	function validacion_usuarios() {
		usuarioNombre = document.getElementById('usuario').value;
		usuarioClave = document.getElementById('clave').value;
		usuarioCampo = document.getElementById('usuario');
		claveCampo = document.getElementById('clave');
		usuarioError = document.getElementById('nombre_error');
		claveError = document.getElementById('clave_error');
		
		if (!usuarioNombre) {
			var mensajeErrorNombre = "Por favor introduzca su Nombre de Usuario!";
			usuarioError.innerHTML = mensajeErrorNombre;
			usuarioCampo.style.outline = "2px solid #f00";
			return false;
		}
		
		if (!usuarioClave) {
			var mensajeErrorClave = "Por favor introduzca su Clave del Usuario!";
			claveError.innerHTML = mensajeErrorClave;
			claveCampo.style.outline = "2px solid #f00";
			return false;
		}
	}