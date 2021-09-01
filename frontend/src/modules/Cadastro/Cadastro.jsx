import { useState } from 'react';
import { useHistory } from "react-router-dom";
import HeaderCadastro from './HeaderCadastro';
import './Cadastro.css';

import grade from '../../assets/img/grade_de_materias.png'


const Cadastro = () => {
    const [cpf, setCPF] = useState('');
    const [dtnasc, setDtnasc] = useState('');
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConf] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        const cadastro = { cpf, dtnasc, nome, curso, matricula, senha, confSenha };
        if (senha === confSenha) {
            fetch('', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cadastro)
            }).then(() => {
                history.push('/');
            })
        } else {
            alert('A confirmação da senha deve ser igual a senha!');
        }
    }

    const eventCadastro = (e) => {        
        history.push("/Acompanhamento")
    }
    return (
        <>
            <HeaderCadastro />
            <div className="cadastro">
                <form className='form-cadastro' onSubmit={handleSubmit}>
                    <div className="div-componentes">
                        <div className='div-componente'>
                            <label>CPF</label>
                            <input
                                id='cpf'
                                type='text'
                                required
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value)}
                            />
                        </div>
                        <div className="div-componente">
                            <label>Data de Nascimento</label>
                            <input
                                id='dtnasc'
                                type='text'
                                required
                                value={dtnasc}
                                onChange={(e) => setDtnasc(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="div-nome">
                    <label>Nome completo</label>
                    <input 
                        id='nome'                       
                        type='text'
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="div-componentes">
                        <div id="curso">
                            <label>Curso</label>
                            <select
                                value={curso}
                                onChange={(e) => setCurso(e.target.value)}
                            >
                                <option value='sin'>Sistemas de Informação</option>
                                <option value='cco'>Ciências da Computação</option>
                            </select>
                        </div>
                        <div id='matricula'>
                        <label>Matricula</label>
                        <input
                            id='mastricula-conf'
                            type='text'
                            required
                            value={matricula}
                            onChange={(e) => setMatricula(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="div-componentes">
                    <div className="div-componente"> 
                    <label>Senha</label>
                    <input
                        id='senha'
                        type='password'
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="div-componente"> 
                    <label>Confirmar senha</label>
                    <input
                        id='conf'
                        type='password'
                        required
                        value={confSenha}
                        onChange={(e) => setConf(e.target.value)}
                        />
                    </div>
                    </div>
                </form>
            <div className="img-btn">
                <div className="div-img"></div>
                <img src={grade} className='img-grade'></img>
                <div className="div-btn">
                    <button className='btn-cadastro' onClick={eventCadastro}>Confirmar</button> 

                </div>
            </div>
            </div>
        </>
    );
}

export default Cadastro;
