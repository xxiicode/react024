const api_key = "e26ee7d4b10a272771cb957c3bfd0ece"
const api_key_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZlZTdkNGIxMGEyNzI3NzFjYjk1N2MzYmZkMGVjZSIsInN1YiI6IjY2M2M4YzFjMGZiMjkxYjdkNTg5MDk3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ftr2D_4XelH1cEvMqNNosDLeh2n4L3Fcak5cs3mwGfw"

const API = "https://api.themoviedb.org/3/"
export const get = async (path) => {

    const results = await fetch(API + path, {
        headers: {
            authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZlZTdkNGIxMGEyNzI3NzFjYjk1N2MzYmZkMGVjZSIsInN1YiI6IjY2M2M4YzFjMGZiMjkxYjdkNTg5MDk3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ftr2D_4XelH1cEvMqNNosDLeh2n4L3Fcak5cs3mwGfw",
            "content-type": "application/json;charset=utf-8"
        }
    })
    return await results.json()
}
 
/* get("/discover/movie").then(data) */