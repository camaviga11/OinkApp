package com.back.api.apirest.modelo;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="personas")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Persona {
	@Id
	@Column
	
	private Long id;
	@Column
	private String nombre;
	@Column
	private String apellido;
	
	//GET & SET
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
}
