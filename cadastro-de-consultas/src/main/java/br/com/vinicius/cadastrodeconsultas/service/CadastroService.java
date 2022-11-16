package br.com.vinicius.cadastrodeconsultas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.vinicius.cadastrodeconsultas.models.Cadastro;
import br.com.vinicius.cadastrodeconsultas.repository.CadastroRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CadastroService {
	private final CadastroRepository cadastroRepository;

	public ResponseEntity<List<Cadastro>> findAll() {

		return new ResponseEntity<List<Cadastro>>(cadastroRepository.findAll(), HttpStatus.OK);
	}

	public Cadastro cadastrar(Cadastro cadastro) {
		
		cadastroRepository.save(cadastro);

		return cadastro;
	}

	public   ResponseEntity deletarId(Long id) {
		
		cadastroRepository.deleteById(id);
		return new ResponseEntity(HttpStatus.OK);
		
	}

	public ResponseEntity<Cadastro> findId(Long id) {
		
		return new ResponseEntity<Cadastro>(cadastroRepository.findById(id).get(),HttpStatus.ACCEPTED);
	}

	public Cadastro remarcar(Cadastro cadastro) {
		
		return cadastroRepository.save(cadastro);
	}
	
	

}
