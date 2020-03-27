import React from 'react'; // could delete, because Next.js will take care of this
import Link from 'next/link';

const Sell = () => (
    <div>
        <p>
        Sell items page!
        </p>
        <Link href="/index" >
            Home!
        </Link>
    </div>
)

export default Sell