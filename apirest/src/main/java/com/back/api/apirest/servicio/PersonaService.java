package com.back.api.apirest.servicio;

import java.util.List;
import java.util.Optional;

import com.back.api.apirest.modelo.Persona;

public interface PersonaService {
	List<Persona>listar();
	Optional<Persona> findById(Long id);
	Persona add(Persona p);
	Persona edit(Persona p);
	Persona delete(Long id);

}
