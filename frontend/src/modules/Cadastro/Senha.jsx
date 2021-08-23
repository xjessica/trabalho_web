import { useState } from "react";

const Senha = () => {
    const [senha, setSenha] = useState('');
    const [confSenha, setConf] = useState('');
    return (
        <div className="div senha">
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
        </div>);
}

export default Senha;