async function getData(data: string) {
    try {
        let response =  await fetch(`/it-lead/data/${data}.json`);
        return await response.json();

    } catch (error) {
        console.error(error);
    }
}


 export default  getData
