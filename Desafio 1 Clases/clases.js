class Usuario{
	constructor(name, apellido, libros, mascotas){
		this.nombre = name;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}


	getFullName() {
    	return `nombre ${this.nombre} apellido ${this.apellido}`
	}

	addPets( newMascota ){
       	this.mascotas.push( newMascota );
	}

	countPets(){
        console.log(this.mascotas.length);
	}

	addBook(titulo, autor){
        this.libros.push( {titulo: titulo, autor:autor} );
	}

 	getBookNames(){
        const bookNames = this.libros.map( libro => {
            return libro.titulo
        } )
        console.log(bookNames);
    }
}


const usuario = new Usuario ("Santiago", "Cachola",
[{titulo: "El Espejo Africano", autor: "Liliana Bodoc"},
{titulo: "Otra Vuelta de Tuerca", autor: "Herny James"}],
["Perro", "Gato", "Tortuga"]);

usuario.getFullName();
usuario.addPets("Hamster");
usuario.countPets();
usuario.addBook("El Caballero de la Armadura Oxidada","Robert Fisher");
usuario.getBookNames();