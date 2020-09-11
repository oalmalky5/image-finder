import React from 'react'
 

class SearchBar extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <input type='text' placeholder='Search for image'/>
                </form>
            </div>
        ) 
    }
}


export default SearchBar