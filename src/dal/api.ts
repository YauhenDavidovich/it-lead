interface DataType {
    data: number[];
}

async function getData(data: string) {
    try {
        let response =  await fetch(`/data/${data}.json`);
        return await response.json();

    } catch (error) {
        console.error(error);
    }
}


 export default  getData
