import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/index" >
            <a> Home! </a>
        </Link>
        <Link href="/sell" >
            <a> Sell Page </a>
        </Link>
    </NavStyles>
)

export default Nav;