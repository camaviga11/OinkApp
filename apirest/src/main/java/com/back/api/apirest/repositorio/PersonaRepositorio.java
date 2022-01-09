package com.back.api.apirest.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.back.api.apirest.modelo.Persona;

public interface PersonaRepositorio extends Repository<Persona, Long>{
	public List<Persona>findAll();
	public Optional<Persona> findById(Long Id);
	public Persona save(Persona p);
	void delete(Persona p);
	//Persona findById(Integer id);
	//@Modifying
	//@Query(value = "delete from personas where id=:id and exists (select estado from Productos p where p.cl_num_Identificacion=:num_Identificacion and p.estado='Cancelado')", nativeQuery=true)
	//void eliminarClientesCancelados(@Param("num_Identificacion") Long num_Identificacion);

}
