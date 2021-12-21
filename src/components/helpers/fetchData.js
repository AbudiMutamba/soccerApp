import axios from "axios"

    const getData =  async () => {
        const API_URL= 'https://www.scorebat.com/video-api/v3/'
        let response =[]

        try {
            response = await axios.get(API_URL)
            //console.log(response);
            let { data } = response
            //console.log(data)
            return(data)
            
        } catch (error) {
            console.log(error)
            console.log(response)

            return{'error': "Resource error"}

        
        }
        // axios.get('https://www.scorebat.com/video-api/v3/')
        // .then (response => {
        //     console.log(response.data.title)
        // }).catch(err => {
        //         console.log(err)
        // })
    }

   


    export default getData