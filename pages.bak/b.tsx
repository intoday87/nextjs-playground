import { GetServerSideProps } from 'next'
import { FC } from "react";

const B:FC = () => {
    return (
        <div>I`m B</div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {}
    }
}

export default B