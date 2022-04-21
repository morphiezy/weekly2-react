import style from './style.module.css';

const {navbar_link} = style;

const Navbar = ({title}) => {
    return(
        <nav className="navbar navbar-light bg-white py-3 py-lg-4 border-bottom sticky-top">
            <div className="custom-container px-4 px-lg-5">
                <a className={`navbar-brand fs-4 fw-bold ${navbar_link}`} href="/">{title}</a>
            </div>
        </nav>
    )
}

export default Navbar