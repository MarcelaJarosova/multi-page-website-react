import { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { FaMagnifyingGlass } from "react-icons/fa6";

const url = 'https://api.sampleapis.com/coffee/hot'

const Form = () => {
    const [img, setImg] = useState('')
    const [data, setData] = useState(null)
    const inputRef = useRef(null)
    const [message, setMessage] = useState(null)

    const displayImage = (e) => {
        e.preventDefault()

        const findCoffee = data.find((item) => {
            return item.title.toLowerCase() === inputRef.current.value.trim().toLowerCase()
        })

        if (findCoffee) {
            setImg(findCoffee.image);
            setMessage(null)
            inputRef.current.value = ''
        } else if (inputRef.current.value == '') {
            setMessage('Write the name of a coffee.')
            setImg('')
        } else {
            setImg('');
            setMessage('Coffee not found :(')
            inputRef.current.value = ''
        }
    }

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) =>
                setData(data)
            )
    }, [])

    return <div className='image-generator'>
        <p><Link to="/"><FaArrowLeft />Back to Homepage</Link></p>
        <div className='form-container'>
            <h2>Generate a picture of coffee</h2>
            <form onSubmit={displayImage}>
                <input type='text' placeholder='Name of a coffee...' ref={inputRef} />
                <button><FaMagnifyingGlass /></button>
            </form>
        </div>
        <div className='image-container'>
            <img src={img} />
            <p>{message}</p>
        </div>
    </div>
}

export default Form