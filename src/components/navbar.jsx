import "./component.css"

function Navbar() {
    return (
        <>
            <div>
                <div className="navbarr">
                    <span className="arrows">
                        <img src="./aroow_left.svg" alt="" />
                        <img src="./arrow_right.svg" alt="" />
                        <img src="./update.svg" alt="" />
                    </span>
                    <span className="inputt">
                        <img className="google" src="./google.png" alt="" />
                    <input className="input" type="text" />
                    <img className="star" src="./star.png" alt="" />
                    <img className="downlaod" src="./downlaod.svg " alt="" />
                    <span className="a">A</span>
                    <img className="dot" src="./dot.svg" alt="" />                    
                    </span>
                </div>    
            </div>        
        </>
    )
}

export default Navbar











