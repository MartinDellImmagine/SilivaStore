

const requestGet = async (url)=>{
    try {
        const request = await fetch(url)
        const data = await request.json()
        return data
    } catch (error) {
        console.error(error);
    }
}


export default requestGet