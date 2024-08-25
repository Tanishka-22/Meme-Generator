import face from "../assets/img.png"

const Header = () => {
  return (
    <div className="header items-center justify-between">
        <img src={face} width={40}  className="header-img"/>
        <h1 className="">Meme Generator</h1>
    </div>

  )
}

export default Header