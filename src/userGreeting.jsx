import propTypes from 'prop-types'

function userGreeting(props){
    if(props.isLoggedIn){
        return <h2>Welcome ,{props.username}</h2>
    }
}



export default userGreeting