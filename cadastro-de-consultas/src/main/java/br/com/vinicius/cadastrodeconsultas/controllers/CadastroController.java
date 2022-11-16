package br.com.vinicius.cadastrodeconsultas.controllers;

import br.com.vinicius.cadastrodeconsultas.models.Cadastro;
import br.com.vinicius.cadastrodeconsultas.service.CadastroService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class CadastroController {

	private final CadastroService cService;

	@GetMapping("/")
	public ResponseEntity<List<Cadastro>> findAll() {

		return cService.findAll();

	}

	@PostMapping("/cadastrar")
	public ResponseEntity<Cadastro> cadastrar(@RequestBody Cadastro cadastro) {

		return new ResponseEntity<Cadastro>(cService.cadastrar(cadastro), HttpStatus.CREATED);
	}

	// usar path variable
	@DeleteMapping("/deletar/{id}")
	public ResponseEntity deletarId(@PathVariable Long id) {

		return cService.deletarId(id);
	}

	@GetMapping("/remarcar/{id}")
	public ResponseEntity<Cadastro> findId(@PathVariable Long id) {
		return cService.findId(id);
	}
	@PutMapping("/remarcar")
	public ResponseEntity<Cadastro> putId(@RequestBody Cadastro cadastro) {


		return new ResponseEntity<Cadastro>(cService.remarcar(cadastro),HttpStatus.OK);
	}
}
