import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/index" >
            <p> Home! </p>
        </Link>
        
        <br />

        <Link href="/sell" >
            <p> Sell Page </p>
        </Link>
    </div>
)

export default Nav;