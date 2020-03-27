import React from 'react'; // could delete, because Next.js will take care of this
import Link from 'next/link';

const Home = () => (
 <div>
     <p>
        index page!
     </p>
     <Link href="/sell" >Sell Page</Link>
 </div>
)

export default Home