export const exerciseOptions = {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/status',
	headers: {
		'x-rapidapi-key': '7168e9ccf6mshbcae0384f11f9f3p1d7067jsn9a7b649c3684',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	hostname: 'youtube-search-and-download.p.rapidapi.com',
	port: null,
	path: '/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw',
	headers: {
		'x-rapidapi-key': '7168e9ccf6mshbcae0384f11f9f3p1d7067jsn9a7b649c3684',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}