package com.back.api.apirest.controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.api.apirest.modelo.Persona;
import com.back.api.apirest.servicio.PersonaService;

@CrossOrigin(origins = "http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/personas"})
public class Controlador {
	@Autowired
	PersonaService service;
	
	@GetMapping
	public List<Persona>listar(){
		return service.listar();
	}
	@PostMapping
	public Persona agregar(@RequestBody Persona p) {
		return service.add(p);
	}
	@GetMapping("/{id}") //Obtener un cliente
	public Optional<Persona> obtenerCliente(@PathVariable("id") Long id) {
		return service.findById(id);
	}
	
}
