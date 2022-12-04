package br.com.projetocopa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.projetocopa.model.Usuario;

public interface IUsuario extends JpaRepository<Usuario, Integer>{

}
