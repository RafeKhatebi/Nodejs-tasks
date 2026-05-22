import chefimg from '../assets/img/chef-claude-icon.png'
export default function Header() {
    return (
        <header className="header">

            <img className='header-img' src={chefimg} alt="chef" />
            <h1
                className="header-title">
                Cloude Chef!</h1>
        </header>
    )
}