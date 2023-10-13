import { GetServerSideProps } from 'next'
import { FC, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';

const A:FC = () => {
    const router = useRouter()
    useEffect(() => {
        const { ['_redirect-url']: redirects, ...query } = router.query
        console.log('[trace] ready', router.isReady, router.query)

        if (!redirects) {
            return
        }
        

        if(Array.isArray(redirects)) {
            router.replace({
                pathname: router.pathname,
                query,
            }, undefined, {
                shallow: true,
            }).then(async () => {
                console.log('[trace] replaced', redirects)
                // for(const redirect of redirects) {
                //     await router.prefetch(redirect)
                //     console.log(`[trace] ${redirect} is prefetched`)
                // }
            })
            
        }
        // router.push('/b', '', { shallow: false }).then(() => { 
        //     console.log('[trace] b is pushed')
        //     // router.push('/c', '', { shallow: false }).then(() => console.log('[trace] c is pushed'))
        // })
    }, [router])

    return (
        <div>
            <h1>I`m A</h1>
            <p><Link href="/b">go to b</Link></p>
            <p><Link href="/c">go to c</Link></p>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {}
    }
}

export default A