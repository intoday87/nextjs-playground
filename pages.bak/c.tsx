import { GetServerSideProps } from 'next'
import { FC } from "react";

const C:FC = () => {
    return (
        <div>I`m C</div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {}
    }
}

export default C