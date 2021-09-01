import { useState } from 'react';
import { useHistory } from "react-router-dom";
import HeaderLogin from './HeaderLogin';
import './Login.css';

 import grade from '../../assets/img/ufsc-campus-trindade.png'
import Login from './Login';


const TelaInicial = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        const cadastro = {  login, senha };
        history.push("/acompanhamento")
    }
    const eventCadastro = (e) => {
        const cadastro = {  login, senha };
        history.push("/Cadastro")
    }
    return (
        <>
            <HeaderLogin />
            <div className="cadastro">
                <form className='form-cadastro' onSubmit={handleSubmit}>
                    <div className="div-componentes">
                        <div className='div-componente'>
                        </div>
                    </div>
                    <h2>Bem Vindo</h2>
                    <div className="div-componentes">
                        <div id='login'>
                        <label>Login</label>
                        <input
                            id='login-conf'
                            type='text'
                            required
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
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
                    </div>
                    <div className="div-btn">
                    <button className='btn-acesso'>Acessar</button>
                </div>
                </form>
            <div className="img-btn">
                <button className='btn-acesso' onClick={eventCadastro}>Cadastro</button>
                <div className="div-img"></div>
                <img src={grade} className='img-grade'></img>
            </div>
            </div>
        </>
    );
}

export default TelaInicial;