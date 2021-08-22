import { useState } from 'react';
import { useHistory } from "react-router-dom";

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
            })
        } else {
            alert('A confirmação da senha deve ser igual a senha!');
        }
    }
    return (
        <div className="cadastro">
            <form onSubmit={handleSubmit}>
                <label>CPF</label>
                <input
                    type='text'
                    required
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                />
                <label>Data de Nascimento</label>
                <input
                    type='text'
                    required
                    value={dtnasc}
                    onChange={(e) => setDtnasc(e.target.value)}
                />
                <label>Nome completo</label>
                <input
                    type='text'
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <label>Curso</label>
                <select
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                >
                    <option value='sin'>Sistemas de Informação</option>
                    <option value='cco'>Ciências da Computação</option>
                </select>
                <label>Senha</label>
                <input
                    type='password'
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <label>Confirmar senha</label>
                <input
                    type='password'
                    required
                    value={confSenha}
                    onChange={(e) => setConf(e.target.value)}
                />
                <button>Confirmar</button>
            </form>
        </div>
    );
}

export default Cadastro;
