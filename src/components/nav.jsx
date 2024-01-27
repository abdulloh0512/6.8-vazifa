import "./component.css"

function Nav() {
    return (
        <>
        <div className="navbar">
        <span className="img_box">
            <img className="img" src="./arrow.svg" alt="" />
        </span>
        <span className="chrome_box">
            <img className="chrome_img" src="./chrome.svg" alt="" />
            <h3 className="new_word">Новая вкладка </h3>
            <img className="close_img" src="./close.png" alt="" />
        </span>
        </div>
        </>
    )
}

export default Nav