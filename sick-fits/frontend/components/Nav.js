import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/index" >
            Home!
        </Link>
        
        <br />

        <Link href="/sell" >
            Sell Page
        </Link>
    </div>
)

export default Nav;