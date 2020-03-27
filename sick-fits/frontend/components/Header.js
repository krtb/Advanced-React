import Nav from '../components/Nav';
import Link from 'next/link';

const Header = () => (
    <div>

        <div className="bar" >
            <Link href="/" >
                <a> Sick Fits </a>
            </Link>
            <Nav/>
        </div>

        <div className="sub-bar" >
            <p> Search </p>
        </div>

        <div> Cart </div>
    </div>
)

export default Header;