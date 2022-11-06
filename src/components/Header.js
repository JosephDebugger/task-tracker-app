import Proptypes from 'prop-types'
import Button from './Button'

const Header =  ({ title }) => {
    
        const onClick = (e) => {
            console.log('clicked')
        }
    return(
        <header className='header'>
            <h1>{title}</h1>
           <Button onClick={onClick} color="green" text="hello" />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: Proptypes.string.isRequired,
}
//css in js
// const headingStyle = {
//     color: 'red', backgroundColor: ' black' 
// }
export default Header