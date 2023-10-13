const requestSomeApi = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })
}

export default async function Page() {
    return <div>hello world</div>
}