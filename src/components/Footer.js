import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <p>
               Copyright &copy; 2023 
            </p>
            <Link to="/adout" >About</Link>
        </footer>
    )
}

export default Footer