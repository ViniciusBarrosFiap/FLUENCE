import imgBanner from "../../../public/assets/bannerPrincipal.png"
import "./Banner.scss"
function Banner(){
    return(
        <section>
            <div className="container">
                <img className="imagemBanner" src={imgBanner} alt="" />
                <h1>Inovação em Hidratação para uma vida melhor</h1>
                <p>A Fluence é uma startup com o foco em cuidado especializado, usando tecnologia na <span>hidratação de doentes & idosos</span></p>
                <button>Saiba mais</button>
            </div>
        </section>
    )
}

export default Banner