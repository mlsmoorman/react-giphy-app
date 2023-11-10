import { useState } from "react"

export default function GIFSearch(giphy) {
    console.log('giphy=====> ', giphy)
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(evt) {
        setSearchTerm(evt.target.value) 
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        giphy.setSearchGiphy(searchTerm)
        console.log(searchTerm)
    }

    return (    
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search GIFs"
            />
            <button type='Submit'>Search</button>
        </form>
    )
}