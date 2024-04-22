const telegtamApi = 'https://api.telegram.org/bot7118033989:AAG70MzZWAM0jKo1UcaQmhorOKEiYZcS6eY/'
export const sendMessage = async (text) => {
    const url = `${telegtamApi}sendMessage?chat_id=-1002070468293&text=${text}`
    const res = await fetch(url)

}   