package br.com.vinicius.cadastrodeconsultas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.vinicius.cadastrodeconsultas.models.Cadastro;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro,Long > {
	

}
