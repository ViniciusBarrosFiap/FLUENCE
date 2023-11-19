import "./style.scss"
import Logo from "../../../public/assets/logoP.png"
export default function Header() {

    return (

        <>
            <header>
                <nav>
                    <div className='divOpcoes'>
                        <img src={Logo} alt="logo fluence" />
                        <ul>
                            <li>Home</li>
                            <li>Solução</li>
                            <li>Contato</li>
                            <li>Sobre nós</li>
                        </ul>

                        <ul className="ulLogin">
                            <li><button><a href="#">Cadastra-se</a></button></li>
                            <li><a href="">Login</a></li>
                        </ul>

                    </div>

                </nav>
            </header>


        </>
    )



}
