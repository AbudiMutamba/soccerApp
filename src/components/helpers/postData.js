import axios from "axios"

    const postData = async(data) => {
    const API_URL= 'https://sheet.best/api/sheets/5e85f394-2f88-4b96-82c4-ea72c4dfb952'

    try {
        await axios.post(API_URL, data)
    } catch (error) {
        console.log(error)
        return{'error': "Resource error"}
    }
}

export default postData