

export const request = async (method, url, data) => {
    console.log(url)
    try {
        const user = localStorage.getItem('auth');
        const auth= JSON.parse(user || '{}')
        const headers={}

        if(auth.accessToken){
            headers['X-Authorization']= auth.accessToken
        }
       
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, {headers});
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        // console.log(buildRequest)
        const response = await buildRequest;
        console.log(response)
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}


export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE')