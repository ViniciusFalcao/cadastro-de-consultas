package br.com.vinicius.cadastrodeconsultas.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Data;

@Entity(name = "Cadastros")
@AllArgsConstructor
@Data
public class Cadastro implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private String data;
	@Column(nullable = false)
	private String hora;
	@Column(nullable = false)
	private String cpf;
	
	public Cadastro(){}
	
	
	
	
	
	

}
