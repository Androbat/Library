
const Hero = () => {
  return (
    <div>
        <header>
            <nav className="nav_container">
                <div>
                    <h3>
                        Library
                    </h3>
                </div>
                <div>
                    <button className="log_btn">
                        Log in
                    </button>
                    <button className="sign_btn">
                        Sign up
                    </button>
                </div>
            </nav>
        </header>
        
        <main className="main_container">
            <div className="main_exp">
                <h2>Your next library to save all your books.</h2>
                <img className="hero_img" src="/bookpile.png" alt="" />
            </div>
            <div className="main_btns">
                    <button className="log_btn">
                        Log in
                    </button>
                    <button className="sign_btn">
                        Sign up
                    </button>
                </div>
        </main>
    </div>
  )
}

export default Hero