package com.back.api.apirest.servicio;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.api.apirest.modelo.Persona;
import com.back.api.apirest.repositorio.PersonaRepositorio;

@Service
public class PersonaServiceImp implements PersonaService{
	@Autowired
	private PersonaRepositorio repositorio;

	@Override
	public List<Persona> listar() {
		return repositorio.findAll();
	}

	@Override
	public Optional<Persona> findById(Long id) {
		return repositorio.findById(id);
	}
	
	//Agregar un usurio nuevo
	@Override
	public Persona add(Persona p) {
		
		return repositorio.save(p);
	}

	@Override
	public Persona edit(Persona p) {
		return repositorio.save(p);
	}

	@Override
	public Persona delete(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
